import React from 'react'
import PropTypes from 'prop-types'

import styles from './game-board.module.css'

function boardKey(x, y) {
  return JSON.stringify({ x, y })
}

function fill(player) {
  switch (player) {
    case 1: {
      return styles.cellPlayer1
    }

    case 2: {
      return styles.cellPlayer2
    }

    default: {
      return styles.cellDefault
    }
  }
}

function isWin(segment, turn) {
  const result = segment.filter(item => item === turn)

  return result.length === 4
}

function checkHorizontalWin(board, turn, { x, y }) {
  const startX = Math.max(x - 3, 0)
  const endX = Math.min(x + 3, 6)
  const lastTurn = turn === 1 ? 2 : 1

  for (let i = startX; i <= endX - 3; i += 1) {
    const segment = [
      board[i + 0][y],
      board[i + 1][y],
      board[i + 2][y],
      board[i + 3][y]
    ]

    if (isWin(segment, lastTurn)) {
      return true
    }
  }

  return false
}

function checkVerticalWin(board, turn, { x, y }) {
  const startY = Math.max(y - 3, 0)
  const endY = Math.min(y + 3, 6)
  const lastTurn = turn === 1 ? 2 : 1

  for (let i = startY; i <= endY - 3; i += 1) {
    const segment = [
      board[x][i + 0],
      board[x][i + 1],
      board[x][i + 2],
      board[x][i + 3]
    ]

    if (isWin(segment, lastTurn)) {
      return true
    }
  }

  return false
}

function checkForwardSlashWin(board, turn, lastMove) {
  const startX = lastMove.x - 3
  const startY = lastMove.y - 3

  const endX = lastMove.x + 3
  const endY = lastMove.y + 3

  const lastTurn = turn === 1 ? 2 : 1
  const segment = []

  let x = startX
  let y = startY

  while (x <= endX || y <= endY) {
    if (x >= 0 && x <= 6) {
      if (y >= 0 && y <= 5) {
        segment.push(board[x][y])
      }
    }

    if (x <= endX) {
      x += 1
    }

    if (y <= endY) {
      y += 1
    }
  }

  return isWin(segment, lastTurn)
}

function checkBackSlashWin(board, turn, lastMove) {
  const startX = lastMove.x + 3
  const endX = lastMove.x - 3
  const startY = lastMove.y - 3
  const endY = lastMove.y + 3

  const lastTurn = turn === 1 ? 2 : 1
  const segment = []

  let x = startX
  let y = startY

  while (x >= endX || y <= endY) {
    if (x >= 0 && x <= 6) {
      if (y >= 0 && y <= 5) {
        segment.push(board[x][y])
      }
    }

    if (x >= endX) {
      x -= 1
    }

    if (y <= endY) {
      y += 1
    }
  }

  return isWin(segment, lastTurn)
}

function checkForTie(board) {
  const result = board
    .map(column => column.filter(cell => cell !== 0))
    .reduce((acc, column) => column.length + acc, 0)
  if (result === 42) return true

  return false
}

/* eslint-disable max-lines-per-function */
const GameBoard = ({
  board,
  playerMove,
  gameWon,
  gameTied,
  lastMove,
  turn
}) => {
  const boardSize = {
    width: 450,
    height: 390
  }

  const offset = 40

  if (checkForTie(board)) {
    gameTied()
  }

  if (lastMove) {
    if (
      checkVerticalWin(board, turn, lastMove) ||
      checkHorizontalWin(board, turn, lastMove) ||
      checkForwardSlashWin(board, turn, lastMove) ||
      checkBackSlashWin(board, turn, lastMove)
    ) {
      gameWon(turn === 1 ? 2 : 1)
    }
  }

  const showBoard = board.map((column, x) =>
    column.map((cell, y) => (
      <circle
        onClick={() => playerMove(x)}
        className={[styles.cell, fill(cell)].join(' ')}
        key={boardKey(x, y)}
        cx={x * 60 + offset}
        cy={y * 60 + offset}
        r="20"
      />
    ))
  )

  return (
    <svg
      width={boardSize.width}
      height={boardSize.height}
      viewBox={`0,0,${boardSize.width},${boardSize.height}`}
      className={styles.root}
    >
      <g className={styles.board}>
        <rect x="0" y="0" width={boardSize.width} height={boardSize.height} />
      </g>
      <g className={styles.cells}>{showBoard}</g>
    </svg>
  )
}
/* eslint-enable max-lines-per-function */

GameBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  playerMove: PropTypes.func.isRequired,
  lastMove: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    })
  ]).isRequired,
  turn: PropTypes.number.isRequired,
  gameWon: PropTypes.func.isRequired,
  gameTied: PropTypes.func.isRequired
}

export default GameBoard

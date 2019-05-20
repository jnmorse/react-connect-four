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

const min = num => Math.max(0, num)
const max = num => Math.min(6, num)

function checkHorizontalWin(board, turn, lastMove) {
  const start = min(lastMove.x - 3)
  const end = max(lastMove.x + 3)
  const lastTurn = turn === 1 ? 2 : 1

  let count = 0

  for (let x = start; x <= end; x += 1) {
    if (board[x][lastMove.y] === lastTurn) {
      count += 1

      if (count === 4) {
        return true
      }
    } else {
      count = 0
    }
  }

  return false
}

/* eslint-disable max-lines-per-function */
const GameBoard = ({ board, playerMove, gameWon, lastMove, turn }) => {
  const boardSize = {
    width: 450,
    height: 390
  }

  const offset = 40

  if (lastMove) {
    if (checkHorizontalWin(board, turn, lastMove)) {
      gameWon(turn === 1 ? 2 : 1)
    }
  }

  const showBoard = board.map((column, x) =>
    column.map((cell, y) => (
      <circle
        onClick={() => playerMove({ x, y })}
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
  gameWon: PropTypes.func.isRequired
}

export default GameBoard

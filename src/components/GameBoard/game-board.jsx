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

const GameBoard = ({ board, playerMove }) => {
  const boardSize = {
    width: 450,
    height: 390
  }

  const offset = 40

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

GameBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  playerMove: PropTypes.func.isRequired
}

export default GameBoard

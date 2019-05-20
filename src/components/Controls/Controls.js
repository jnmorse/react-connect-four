import React from 'react'
import PropTypes from 'prop-types'

import styles from './Controls.module.css'

const Controls = ({ resetGame }) => (
  <div className={styles.root}>
    <button type="reset" onClick={resetGame}>
      Reset
    </button>
  </div>
)

Controls.propTypes = {
  resetGame: PropTypes.func.isRequired
}

export default Controls

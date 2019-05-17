import React from 'react'
import PropTypes from 'prop-types'

import { root } from './status-display.module.css'

const StatusDisplay = ({ status }) => {
  if (status) {
    return <div className={root}>{status}</div>
  }

  return null
}

StatusDisplay.propTypes = {
  status: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired
}

export default StatusDisplay

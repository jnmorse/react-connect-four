import React from 'react'
import { render } from 'react-dom'

import './style.css'

import App from './components/App'

const mountPoint = document.getElementById('root')

render(<App />, mountPoint)

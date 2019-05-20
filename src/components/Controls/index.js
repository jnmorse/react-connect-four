import { connect } from 'react-redux'

import { resetGame } from '../../actions'
import Controls from './Controls'

export default connect(
  null,
  { resetGame }
)(Controls)

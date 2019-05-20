import { connect } from 'react-redux'

import actions from '../../actions'
import Controls from './Controls'

export default connect(
  null,
  actions
)(Controls)

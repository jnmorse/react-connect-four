import { connect } from 'react-redux'
import StatusDisplay from './status-display'

export default connect(({ status }) => ({ status }))(StatusDisplay)

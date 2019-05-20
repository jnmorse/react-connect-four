import { connect } from 'react-redux'
import GameBoard from './game-board'

import { playerMove } from '../../actions'

const mapStateToProps = ({ game: { board } }) => ({ board })

export default connect(
  mapStateToProps,
  { playerMove }
)(GameBoard)

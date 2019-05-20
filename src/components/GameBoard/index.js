import { connect } from 'react-redux'
import GameBoard from './game-board'

import { playerMove, gameWon } from '../../actions'

const mapStateToProps = ({ game: { board, lastMove, turn } }) => ({
  board,
  lastMove,
  turn
})

export default connect(
  mapStateToProps,
  { playerMove, gameWon }
)(GameBoard)

import { connect } from 'react-redux'
import GameBoard from './game-board'

import { playerMove, gameWon, gameTied } from '../../actions'

const mapStateToProps = ({ game: { board, lastMove, turn } }) => ({
  board,
  lastMove,
  turn
})

export default connect(
  mapStateToProps,
  { playerMove, gameWon, gameTied }
)(GameBoard)

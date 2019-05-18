import { connect } from 'react-redux'
import GameBoard from './game-board'

function mapStateToProps(state) {
  return {
    board: state.game.board
  }
}

export default connect(mapStateToProps)(GameBoard)

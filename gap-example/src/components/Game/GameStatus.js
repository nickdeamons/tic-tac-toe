import React, {Component} from 'react'
import PropTypes from 'prop-types'; // ES6

class GameStatus extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // to reduce turnary operators in the UI code for the GameBoard
   return(
    <div>
      {!this.props.draw ?
        <div>
         { this.props.winner.piece === undefined ? 
          <h2 id="currentPlayer">
            <strong>{this.props.currentPlayer.displayText}</strong>, it's your turn!
          </h2> :
          <h2 className="winner">
            <span>{this.props.winner.name} has won the game!</span>
          </h2>
          }
          </div> :
          <h2 className="draw">
            Cats game! Try again!
          </h2>
      }
    </div>
    )
  }

}

GameStatus.propTypes = {
  draw: PropTypes.bool.isRequired,
  winner: PropTypes.object.isRequired,
  currentPlayer: PropTypes.object.isRequired
}

export default GameStatus
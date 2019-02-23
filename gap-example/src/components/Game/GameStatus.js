import React, {Component} from 'react'


class GameStatus extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
   return(
    <div>
      {this.props.winner.piece === undefined ? 
      <h2 id="currentPlayer">
        <strong>{this.props.currentPlayer.displayText}</strong>, it's your turn!
      </h2> :
      <h2 className="winner">
        <span>{this.props.winner.name} has won the game!</span>
      </h2>
      }
    </div>
    )
  }

}

export default GameStatus
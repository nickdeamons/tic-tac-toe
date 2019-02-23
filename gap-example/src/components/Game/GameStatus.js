import React, {Component} from 'react'


class GameStatus extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
   return(
    <div> 
      <h2 id="currentPlayer">
        <strong>{this.props.currentPlayer.displayText}</strong>, it's your turn!
      </h2>
      <div className="winner">
        {this.props.winner.piece !== undefined ?
        <span>{this.props.winner.name} has won the game!</span>: ''
        }
      </div>
    </div>
    )
  }

}

export default GameStatus
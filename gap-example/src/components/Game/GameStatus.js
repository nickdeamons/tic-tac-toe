import React, {Component} from 'react'

//import './GamePiece.css';

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
    </div>
    )
  }

}

export default GameStatus
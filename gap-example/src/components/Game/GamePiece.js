import React, {Component} from 'react'

import './GamePiece.css';

class GamePiece extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="GamePiece" key={this.props.pieceKey} onClick={this.props.handleClick}>
      {this.props.player ?
        this.props.player.piece === 'X' ?
        'X' : 'O'
         : ' ' 
      } 
      </div>
    )
  }
}

export default GamePiece;
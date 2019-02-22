import React, {Component} from 'react'

import './GamePiece.css';

class GamePiece extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      player: {}
    }
  }
  handleClick = () => {
    if(!this.state.selected) {
      const player = this.props.player;
      this.setState({
        selected: true,
        player: {...player}
      })
      this.props.handlePieceClick();
    }
  }
  reset = () => {
    this.setState({
      selected: false,
      player: {}
    })
  }
  render() {
    return (
      <div className="GamePiece" key={this.props.pieceKey} onClick={this.handleClick}>
      {(this.state.player && this.state.selected) ?
        this.state.player.piece === 'X' ?
        'X' : 'O'
         : ' ' 
      } 
      </div>
    )
  }
}

export default GamePiece;
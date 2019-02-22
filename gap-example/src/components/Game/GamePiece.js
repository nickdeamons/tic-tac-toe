import React, {Component} from 'react'
import classNames from 'classnames/bind';

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
    let gamePieceClasses = classNames({
      X: this.state.player.piece === 'X',
      O: this.state.player.piece === 'O',
      selected: this.state.selected,
      GamePiece: 'GamePiece'
    })
    return (
      <div className={gamePieceClasses} key={this.props.pieceKey} onClick={this.handleClick}>
        <div>
        {(this.state.player && this.state.selected) ?
          this.state.player.piece === 'X' ?
          'X' : 'O'
          : ' ' 
        } 
        </div>
      </div>
    )
  }
}

export default GamePiece;
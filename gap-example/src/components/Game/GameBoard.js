import React, {Component} from 'react';
import classNames from 'classnames/bind';

import './GameBoard.css';

import Player from '../../models/Player';

class GameBoard extends React.Component {
     
  constructor() {
    super();

    const gamePieces = new Array();
    for(let i=0; i< 9;i++) {
      gamePieces.push({piece: '', selected: false})
    }
    this.state = {
      gamePieces: gamePieces,
      lastClicked: -1,
      moveList: [],
      player: 0,
      players: [new Player('X_X', 'X', 0), new Player('O_O', 'O', 1)]
    }
  }

  get currentPlayer() {
    return {...this.state.players[this.state.player]}
  }
  nextPlayerTurn = () => {
    this.setState({
      player: Math.abs(this.state.player - 1)
    })
  }
  setPiece = (index) => {
    const gamePieces = [].concat(this.state.gamePieces)
    gamePieces[index] = {piece: this.state.players[this.state.player].piece, selected: true};
    this.setState({
      gamePieces: gamePieces
    })
  }
  unSetPiece = (index) => {
    const gamePieces = [].concat(this.state.gamePieces)
    gamePieces[index] = {piece: '', selected: false};
    this.setState({
      gamePieces: gamePieces
    })
  }
  handleGamePieceClick = (index) => {
    if(!this.state.gamePieces[index].selected) {
      const moves = ([].concat(this.state.moveList))
      moves.push(index)
      this.setPiece(index)
      this.setState({
        lastClicked: index,
        moveList: moves,
      })
      this.nextPlayerTurn()
    }
  }
  undo = () => {
    const move = this.state.moveList.slice(this.state.moveList.length - 1).pop();
    const moves = [].concat(this.state.moveList)
    moves.length = moves.length - 1;
    this.unSetPiece(move)
    this.setState({
      lastClicked: move,
      moveList: moves,
    })
    this.nextPlayerTurn()
  }
  reset = () => {
    const gamePieces = new Array();
    for(let i=0; i< 9;i++) {
      gamePieces.push({piece: '', selected: false})
    }
    this.setState( {
      gamePieces: gamePieces,
      player: 0,
      lastClicked: -1,
      moveList: []
    })
  }
  render() {
    return (
      <div>
        <h2 id="currentPlayer"><strong>{this.state.players[this.state.player].displayText}</strong>, it's your turn!</h2>
        <div className="GameBoard">
          {this.state.gamePieces.map((element, index) => {
             let gamePieceClasses = classNames({
              X: element.piece === 'X',
              O: element.piece === 'O',
              selected: element.selected,
              GamePiece: 'GamePiece'
            })
            return (<div key={`piece_${index}`} className={gamePieceClasses} onClick={() => { this.handleGamePieceClick(index)}}>
              {element.piece  === 'X' || element.piece === 'O' ? element.piece : ' '}
            </div>)
          })}
        </div>
        { this.state.moveList.length > 0 ?
          <div className="buttons">
            <button className="secondary" onClick={this.undo}>Undo</button>
            <button className="primary" onClick={this.reset}>Reset</button>
          </div>
          : '' 
        }
      </div>
    )
  }
}

export default GameBoard;
import React, {Component} from 'react';

import './GameBoard.css';

import Player from '../../models/Player';

class GameBoard extends React.Component {
     
  constructor() {
    super();

    const gamePieces = new Array();
    for(let i=0; i< 9;i++) {
      gamePieces.push({player: null, piece: ''})
    }
    this.state = {
      lastClicked: -1,
      moveList: [],
      player: 0,
      gamePieces: gamePieces,
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
  handleGamePieceClick = (index) => {
    const moves = ([].concat(this.state.moveList))
    moves.push(index)
    this.setState({
      lastClicked: index,
      moveList: moves
    })
    this.nextPlayerTurn()
  }
  undo = (index) => {
    const move = this.state.moveList.splice(-1);
    const moves = this.state.moveList.slice(-1);
    this.state.gamePieces[move].reset();
    this.setState({
      lastClicked: index,
      moveList: moves
    })
  }
  render() {
    return (
      <div>
        <h2><strong>{this.state.players[this.state.player].displayText}</strong>, it's your turn!</h2>
        <div>{this.state.lastClicked} : 
        {
          this.state.moveList.map((value) => {
            return <span>{value}</span>
          })
        }</div>
        <div className="GameBoard">
          {this.state.gamePieces.map((element, index) => {
            return (<div key={`piece_${index}`} className="GamePiece" onClick={() => { this.handleGamePieceClick(index)}}>
              {element.piece  === 'X' || element.piece === 'O' ? element.piece : ' '}
            </div>)
          })}
        </div>
      </div>
    )
  }
}

export default GameBoard;
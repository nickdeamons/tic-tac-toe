import React, {Component} from 'react';
import GamePiece from './GamePiece';

import './GameBoard.css';

import Player from '../../models/Player';

class GameBoard extends React.Component {
     
  constructor() {
    super();
    this.state = {
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
  handleGamePieceClick = (index) => {
    const moves = ([].concat(this.state.moveList))
    console.log(typeof(moves), moves)
    moves.push(index)
    this.setState({
      lastClicked: index,
      moveList: moves
    })
    this.nextPlayerTurn()
  }
  undo = (index) => {
    const moves = this.state.moveList.slice(-1)
    this.setState({
      lastClicked: index,
      moveList: moves
    })
  }
  createBoard = () => {
    let gameBoard = []
    for(let i = 0; i < 9; i++) {
      gameBoard.push(<GamePiece key={i} handlePieceClick={() => this.handleGamePieceClick(i)} player={this.currentPlayer} undo={() => this.undo(i)} />)
    }
    return gameBoard
  }
  render() {{}
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
          {this.createBoard()}
        </div>
      </div>
    )
  }
}

export default GameBoard;
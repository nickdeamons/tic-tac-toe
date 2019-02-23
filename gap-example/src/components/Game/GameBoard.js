import React, {Component} from 'react';
import classNames from 'classnames/bind';

import './GameBoard.css';

import Player from '../../models/Player';
import WinConditions from '../../models/WinConditions';

class GameBoard extends React.Component {
     
  constructor() {
    super();

    const gamePieces = new Array();
    for(let i=0; i< 9;i++) {
      gamePieces.push({piece: '', selected: false})
    }
    this.state = {
      activeGame: true,
      gamePieces: gamePieces,
      lastClicked: -1,
      moveList: [],
      player: 0,
      players: [new Player('1', 'X', 0), new Player('2', 'O', 1)],
      winner: {}
    }
  }

  get currentPlayer() {
    return {...this.state.players[this.state.player]}
  }

  setPiece = (index) => {
    const gamePieces = [].concat(this.state.gamePieces)
    gamePieces[index] = {piece: this.state.players[this.state.player].piece, selected: true};
    return gamePieces
  }
  unSetPiece = (index) => {
    const gamePieces = [].concat(this.state.gamePieces)
    gamePieces[index] = {piece: '', selected: false};
    this.setState({
      gamePieces: gamePieces
    })
  }
  hasWinner = (pieces) => {
    const playerOneSelected = new Array(9);
    const playerTwoSelected = new Array(9);
    playerOneSelected.fill(false)
    playerTwoSelected.fill(false)
    pieces.forEach((gamePiece, index) => {
      if(gamePiece.piece === 'X' ) {
        playerOneSelected[index] = true
      }
      if(gamePiece.piece === 'O') {
        playerTwoSelected[index] = true
      }
    })
    let winner = {}
    for(var i=0; i<WinConditions.length;i++) {
      const condition = WinConditions[i]
      if(condition.every((value, index) => {
        return value===playerOneSelected[index]
      })) {
        winner = this.state.players[0]
      }
      if(condition.every((value, index) => {
        return value===playerTwoSelected[index]
      })) {
        winner = this.state.players[1]
      }
    }
    return winner;
  }
  handleGamePieceClick = (index) => {
    if(this.state.activeGame && !this.state.gamePieces[index].selected) {
      const moves = ([].concat(this.state.moveList))
      moves.push(index)
      const gamePieces = this.setPiece(index)
      const winner = this.hasWinner(gamePieces)
        if(!winner.piece) {
          this.setState({
            lastClicked: index,
            moveList: moves,
            gamePieces: gamePieces,
            player: Math.abs(this.state.player - 1)
          })
          // keep the game going
        } else {
          this.setState({
            winner: winner,
            lastClicked: index,
            moveList: moves,
            gamePieces: gamePieces,
            activeGame: false
          })
        }
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
      player: Math.abs(this.state.player - 1)
    })
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
      moveList: [],
      activeGame: true,
      winner: {}
    })
  }
  showWinner() {
    return(
      this.state.winner.name ?
      <h3>Player: {this.state.winner.name} has won the game!</h3> : ''
    )
  }
  render() {
    return (
      <div>
        <h2 id="currentPlayer"><strong>{this.state.players[this.state.player].displayText}</strong>, it's your turn!</h2>
        {this.showWinner()}
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
            <button className="secondary" id="undo-btn" onClick={this.undo}>Undo</button>
            <button className="primary" id="reset-btn" onClick={this.reset}>Reset</button>
          </div>
          : '' 
        }
      </div>
    )
  }
}

export default GameBoard;
import React, {Component} from 'react'
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'; // ES6

import './styles/GamePiece.css';

class GamePiece extends React.Component {
  constructor() {
    super();
  }
  render() {
    let gamePieceClasses = classNames({
      X: this.props.piece === 'X',
      O: this.props.piece === 'O',
      selected: this.props.selected,
      GamePiece: 'GamePiece'
    })
    return (
      <div className={gamePieceClasses} >
        <div>
        {(this.props.selected) ?
         <span>{this.props.piece}</span> : ''
        } 
        </div>
      </div>
    )
  }
}

GameStatus.propTypes = {
  draw: PropTypes.bool.isRequired,
  winner: PropTypes.object.isRequired,
  currentPlayer: PropTypes.object.isRequired
}


export default GamePiece;
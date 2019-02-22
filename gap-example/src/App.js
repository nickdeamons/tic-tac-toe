import React, { Component } from 'react';
import GameBoard from './components/Game/GameBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TicTacToe</h1>
        <GameBoard />
      </div>
    );
  }
}

export default App;

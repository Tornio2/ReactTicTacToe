import React from 'react';
import Board from '../board/Board.jsx';
import './App.css';


export function App() {
  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}

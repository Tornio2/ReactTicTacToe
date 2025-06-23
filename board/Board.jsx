import React, { useState } from 'react';
import Square from './Square.jsx';



const winningCombinations = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6],
];


function calculateWinner(squares) {
  for (let line of winningCombinations) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line };
    }
  }
  return null;
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    // const winner = calculateWinner(squares);

    

    const result = calculateWinner(squares);
    const winner = result?.player;
    const winningLine = result?.line || []; // Store the winning line for potential future use

    const isDraw = !winner && squares.every(sq => sq !== null);
    const gameOver = !!winner || isDraw;

    const status = winner
        ? `Winner: ${winner}`: isDraw
            ? 'Draw!'
            : `Next player: ${xIsNext ? 'X' : 'O'}`;

    function handleClick(i) {
        if (squares[i] || gameOver) {
            return; // Ignore click if square is already filled or there's a winner
        }
        const newSquares = squares.slice(); // Create a copy of the squares array
        newSquares[i] = xIsNext ? 'X' : 'O'; 
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }


      function resetGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(Math.random() < 0.5); // randomly set the next player
    }

    function renderSquare(i) {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
                highlight={winningLine.includes(i)}

            />
        );
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
            </div>
            <div className="status">{status}</div>

            {/* if the game is over show a reset button */}
            {gameOver && (
            <button className="reset" onClick={resetGame}>
                Reset Game
            </button>
        )}
        </div>
    );
}




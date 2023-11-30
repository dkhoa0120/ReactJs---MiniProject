import React, { useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { calculateWinner } from "./helper";

const Square = ({ value, onSquareClick }) => {
  return (
    <div className="square" onClick={onSquareClick}>
      {value}
    </div>
  );
};

function TicTac() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextPerson, setNextPerson] = useState(false);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (!nextPerson ? "X" : "O");
  }

  console.log("winner", winner);

  const handleClick = (i) => {
    const nextSquares = squares.slice();
    if (!nextPerson) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setNextPerson(!nextPerson);
    setSquares(nextSquares);
  };

  return (
    <div className="tictac">
      <div className="status">{status}</div>
      <div className="restart-btn-mobile">
        <Button
          variant="outline-light"
          onClick={() => {
            setSquares(Array(9).fill(null));
            setNextPerson(false);
          }}
        >
          <i className="fa-solid fa-rotate-left"></i> Restart
        </Button>
      </div>
      <div className="game">
        <div className="board">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        &nbsp;
        <div className="restart-btn-pc">
          <Button
            variant="outline-light"
            onClick={() => {
              setSquares(Array(9).fill(null));
              setNextPerson(false);
            }}
          >
            <i className="fa-solid fa-rotate-left"></i> Restart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TicTac;

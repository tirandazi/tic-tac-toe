import { useState } from 'react'
import Square from './Square'
import calculateWinner from '../helper'

const Board = () => {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(0).fill(null))

  let status
  const winner = calculateWinner(squares)
  if (winner) {
    status = 'Winner: ' + winner
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  const handleSquareClick = (i) => {
    if (squares[i] || winner) return

    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <>
      <div className="status">{status}</div>

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
    </>
  )
}

export default Board

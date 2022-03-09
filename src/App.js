import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  let arr = [" ", " ", " ", " ", " ", " ", " ", " ", " ",]
  const [count, setCount] = useState(0);
  const [game, setGame] = useState(arr);

  const playerTwo = {
    color: 'rgb(230, 244, 207)'
  }
  const playerOne = {
    color: 'rgb(79, 83, 86)'
  }
  const winner = checkWinner();

  function checkWinner() {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
      }
    } if (!game.includes(" ")) {
      return "tie"
    }
    return null;
  }
  function resetGame() {
    setGame(arr)
    setCount(0)
  }

  function operation(n) {
    setCount(count + 1)
    if (count % 2 === 0) {
      arr = [...game]
      arr[n - 1] = "X"
      setGame([...arr])
    } else {
      arr = [...game]
      arr[n - 1] = "O"
      setGame([...arr])
    }
  }

  if (winner === "tie") {
    return (
      <div className='main'>
        <div className='container winner'>
          <div>
            <div className='xo'>
              <h1 className='win'>X</h1>
              <h1 style={playerTwo} className='win'>O</h1>
            </div>
            <h1 >DRAW!</h1>
          </div>
        </div>
        <button onClick={() => resetGame()} className="btn d-block mx-auto reset">RESTART GAME</button>
      </div>

    )
  }

  if (winner === "X" || winner === "O") {
    return (
      <div className='main'>
        <div className='container winner'>
          <div>
            <h1 style={(winner === "O") ? playerTwo : playerOne} className='win'>{winner}</h1>
            <h1 >WINNER!</h1>
          </div>
        </div>
        <button onClick={() => resetGame()} align-items-center className="btn d-block mx-auto reset">RESTART GAME</button>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className="board">
        <h1> {count % 2 === 0 ? "X" : "O"} : Turn </h1>
        <table className="table borderless">
          <tbody>
            <tr>
              <td className='first'> <button disabled={game[0] !== " "} style={(game[0] === "O") ? playerTwo : playerOne} className="btn" id="one" onClick={() => operation(1)}>{game[0]}</button></td>
              <td className='second'> <button disabled={game[1] !== " "} style={(game[1] === "O") ? playerTwo : playerOne} className="btn " id="two" onClick={() => operation(2)}>{game[1]}</button></td>
              <td className='third'> <button disabled={game[2] !== " "} style={(game[2] === "O") ? playerTwo : playerOne} className="btn " id="three" onClick={() => operation(3)}>{game[2]}</button></td>
            </tr>
            <tr>
              <td className='first middle'> <button style={(game[3] === "O") ? playerTwo : playerOne} disabled={game[3] !== " "} className="btn " id="four" onClick={() => operation(4)}>{game[3]}</button></td>
              <td className='second middle'> <button disabled={game[4] !== " "} style={(game[4] === "O") ? playerTwo : playerOne} className="btn " id="five" onClick={() => operation(5)}>{game[4]}</button></td>
              <td className='third middle'> <button disabled={game[5] !== " "} style={(game[5] === "O") ? playerTwo : playerOne} className="btn " id="six" onClick={() => operation(6)}>{game[5]}</button></td>
            </tr>
            <tr>
              <td className='first button'> <button disabled={game[6] !== " "} style={(game[6] === "O") ? playerTwo : playerOne} className="btn " id="seven" onClick={() => operation(7)}>{game[6]}</button></td>
              <td className='second button'> <button disabled={game[7] !== " "} style={(game[7] === "O") ? playerTwo : playerOne} className="btn " id="eight" onClick={() => operation(8)}>{game[7]}</button></td>
              <td className='third button'> <button disabled={game[8] !== " "} style={(game[8] === "O") ? playerTwo : playerOne} className="btn " id="nine" onClick={() => operation(9)}>{game[8]}</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default App;

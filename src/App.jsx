import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { render } from '@testing-library/react';


function App() {

  const [turn, setTurn] = useState('X');
  const [count, setCount] = useState(0);
  const [game, setGame] = useState([" "," "," "," "," "," "," "," "]);
  
  const [table, setTable] = useState(Array(9));


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

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });


  let arr = [" "," "," "," "," "," "," "," ",]
  function operation(n) {
    setCount(count + 1)
    setTable([...table, n])
    console.log("n:"+n)
    if(count%2===0){
      arr = [...game]
      arr[n-1]="X"
      setGame([...arr])

    }else{
      arr = [...game]
      arr[n-1]="O"
      setGame([...arr])

    }
  }



  return (
    <div className='container'>
      <div className="card">
        <table className="table borderless">
          <tbody>
            <tr>
              <td className='first'> <button className="btn" id="one" onClick={() => operation(1)}>{game[0]}</button></td>
              <td className='second'> <button className="btn " id="two" onClick={() => operation(2)}>{game[1]}</button></td>
              <td className='third'> <button className="btn " id="three" onClick={() => operation(3)}>{game[2]}</button></td>
            </tr>
            <tr>
              <td className='first middle'> <button className="btn " id="four" onClick={() => operation(4)}>{game[3]}</button></td>
              <td className='second middle'> <button className="btn " id="five" onClick={() => operation(5)}>{game[4]}</button></td>
              <td className='third middle'> <button className="btn " id="six"onClick={() => operation(6)}>{game[5]}</button></td>
            </tr>
            <tr>
              <td className='first bottom'> <button className="btn " id="seven" onClick={() => operation(7)}>{game[6]}</button></td>
              <td className='second bottom'> <button className="btn " id="eight" onClick={() => operation(8)}>{game[7]}</button></td>
              <td className='third bottom'> <button className="btn " id="nine" onClick={() => operation(9)}>{game[8]}</button></td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>



  );
}

export default App;

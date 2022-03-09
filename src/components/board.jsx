import '../App.css';
import React from 'react';
import App from '../App';


const Board = ({game, operation, count})=> {

        return (
            <><h1>Turn: {count % 2 === 0 ? "X" : "O"}</h1><table className="table borderless">
                <tbody>
                    <tr>
                        <td className='first'> <button disabled={game[0] !== " "} className="btn" id="one" onClick={() => operation(1)}>{game[0]}</button></td>
                        <td className='second'> <button disabled={game[1] !== " "} className="btn " id="two" onClick={() => operation(2)}>{game[1]}</button></td>
                        <td className='third'> <button disabled={game[2] !== " "} className="btn " id="three" onClick={() => operation(3)}>{game[2]}</button></td>
                    </tr>
                    <tr>
                        <td className='first middle'> <button disabled={game[3] !== " "} className="btn " id="four" onClick={() => operation(4)}>{game[3]}</button></td>
                        <td className='second middle'> <button disabled={game[4] !== " "} className="btn " id="five" onClick={() => operation(5)}>{game[4]}</button></td>
                        <td className='third middle'> <button disabled={game[5] !== " "} className="btn " id="six" onClick={() => operation(6)}>{game[5]}</button></td>
                    </tr>
                    <tr>
                        <td className='first bottom'> <button disabled={game[6] !== " "} className="btn " id="seven" onClick={() => operation(7)}>{game[6]}</button></td>
                        <td className='second bottom'> <button disabled={game[7] !== " "} className="btn " id="eight" onClick={() => operation(8)}>{game[7]}</button></td>
                        <td className='third bottom'> <button disabled={game[8] !== " "} className="btn " id="nine" onClick={() => operation(9)}>{game[8]}</button></td>
                    </tr>
                </tbody>
            </table></>
        )
}

export default Board

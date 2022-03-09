import { Button } from 'bootstrap';
import './App.css';


function App() {
  return (
    <div className='container'>
      <div className="card">
        <table className="table borderless">
          <tbody>
            <tr>
              <td className='first'> <button className="btn" id="one">1</button></td>
              <td className='second'> <button className="btn " id="two">1</button></td>
              <td className='third'> <button className="btn " id="three">1</button></td>
            </tr>
            <tr>
              <td className='first middle'> <button className="btn " id="four">1</button></td>
              <td className='second middle'> <button className="btn " id="five">1</button></td>
              <td className='third middle'> <button className="btn " id="six">1</button></td>
            </tr>
            <tr>
              <td className='first bottom'> <button className="btn " id="seven">1</button></td>
              <td className='second bottom'> <button className="btn " id="eight">1</button></td>
              <td className='third bottom'> <button className="btn " id="nine">1</button></td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>



  );
}

export default App;

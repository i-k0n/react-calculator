import React, { useState } from 'react';
import './App.css';

function App() {

  const [display, setDisplay] = useState("");

  return (
    <div className="App">
      <div className="calculator-container">
        <div className="display">
          {display}
        </div>
        <div className="buttons-container">
          <button className="btn btn-clear">AC</button>
          <button className="btn btn-plus-minus">&#177;</button>
          <button className="btn btn-percent">&#37;</button>
          <button className="btn btn-divide">&divide;</button>
          <button className="btn btn-number" value="7" onClick={e => setDisplay(e.target.value)}>7</button>
          <button className="btn btn-number" value="8" onClick={e => setDisplay(e.target.value)}>8</button>
          <button className="btn btn-number" value="9" onClick={e => setDisplay(e.target.value)}>9</button>
          <button className="btn btn-multiply">&times;</button>
          <button className="btn btn-number" value="4" onClick={e => setDisplay(e.target.value)}>4</button>
          <button className="btn btn-number" value="5" onClick={e => setDisplay(e.target.value)}>5</button>
          <button className="btn btn-number" value="6" onClick={e => setDisplay(e.target.value)}>6</button>
          <button className="btn btn-subtract">&minus;</button>
          <button className="btn btn-number" value="1" onClick={e => setDisplay(e.target.value)}>1</button>
          <button className="btn btn-number" value="2" onClick={e => setDisplay(e.target.value)}>2</button>
          <button className="btn btn-number" value="3" onClick={e => setDisplay(e.target.value)}>3</button>
          <button className="btn btn-add">&#43;</button>
          <button className="btn btn-number" value="0" onClick={e => setDisplay(e.target.value)}>0</button>
          <button className="btn btn-decimal">&#46;</button>
          <button className="btn btn-equal">&#61;</button>
        </div>
      </div>
    </div>
  );
}

export default App;

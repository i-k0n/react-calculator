import React from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';

// click a number
// clicking another number adds to that number
// if an operator is selected, switch to second number
// keep adding to second number
// if equals is pressed, check operator
// then perform math and display result



function App() {

  

  return (
    <div className="calculator-container">
      <Calculator />
    </div>
  );
}

export default App;

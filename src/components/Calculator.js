import React, { useState, useEffect } from 'react'

function Calculator() {

    return (
      <div className="calculator-container">
        <div className="display">
        </div>
        <div className="buttons-container">
          <button className="btn btn-clear">AC</button>
          <button className="btn btn-plus-minus">&#177;</button>
          <button className="btn btn-percent">&#37;</button>
          <button className="btn btn-divide">&divide;</button>
          <button className="btn btn-number">7</button>
          <button className="btn btn-number">8</button>
          <button className="btn btn-number">9</button>
          <button className="btn btn-multiply">&times;</button>
          <button className="btn btn-number">4</button>
          <button className="btn btn-number">5</button>
          <button className="btn btn-number">6</button>
          <button className="btn btn-subtract">&minus;</button>
          <button className="btn btn-number">1</button>
          <button className="btn btn-number">2</button>
          <button className="btn btn-number">3</button>
          <button className="btn btn-add">&#43;</button>
          <button className="btn btn-number">0</button>
          <button className="btn btn-decimal">&#46;</button>
          <button className="btn btn-equal">&#61;</button>
        </div>
      </div>
    )
}

export default Calculator

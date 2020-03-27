import React, { useState } from 'react'
import Screen from './Screen/Screen'
import Keypad from './Keypad/Keypad'

function Calculator() {

    const [equation, setEquation] = useState('');
    const [result, setResult] = useState(0);

    const onButtonPress = e => {
      let equationTemp = equation;
      const pressedButton = e.target.innerHTML;
      if (pressedButton === 'C') return clear();
      else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') equationTemp += pressedButton;
      else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) equationTemp += ' ' + pressedButton + ' ';
      else if (pressedButton === '=') {
        try {
          const evalResult = eval(equationTemp);
          const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
          setResult(result);
        } catch (error) {
          alert('Invalid Mathematical Equation');
        }
      }
      else {
        equationTemp = equationTemp.trim();
        equationTemp = equationTemp.substr(0, equationTemp.length - 1);
      }
                  
      setEquation(equationTemp);
    }

    const clear = () => {
      setEquation('');
      setResult(0);
    }

    return (
      <main className="calculator">
        <Screen equation={equation} result={result} />
        <Keypad onButtonPress={onButtonPress} />
      </main>
    )
}

export default Calculator

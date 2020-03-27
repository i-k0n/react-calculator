import React, { useState } from 'react'
import Screen from './Screen/Screen'
import Keypad from './Keypad/Keypad'

function Calculator() {

    const [equation, setEquation] = useState('');
    const [result, setResult] = useState(0);

    const onButtonPress = e => {
      // let equationTemp = equation;
      // const pressedButton = e.target.innerHTML;
      const key = e.target.innerHTML;
      const action = e.target.getAttribute('data-action');
      console.log(e.target.innerHTML)
      console.log(e.target.getAttribute('data-action'))

      if (!action) {
        console.log('number key!')
      }

      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' ||
        action === 'percentage'
        ) {
          console.log('operator key!')
      }
      // handle clear
      // if (pressedButton === 'C') return clear();
      // // handle numbers
      // else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') equationTemp += pressedButton;
      // // handle operations
      // else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) equationTemp += ' ' + pressedButton + ' ';
      // // handle equals
      // else if (pressedButton === '=') {
      //   try {
      //     const evalResult = eval(equationTemp);
      //     const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
      //     setResult(result);
      //   } catch (error) {
      //     alert('Invalid Mathematical Equation');
      //   }
      // }
      // // handle delete
      // else {
      //   equationTemp = equationTemp.trim();
      //   equationTemp = equationTemp.substr(0, equationTemp.length - 1);
      // }
                  
      // setEquation(equationTemp);
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

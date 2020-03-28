import React, { useState } from 'react'
import Screen from './Screen/Screen'
import Keypad from './Keypad/Keypad'

function Calculator() {

    const [equation, setEquation] = useState('');
    const [result, setResult] = useState('0');
    const [display, setDisplay] = useState('0');

    const onButtonPress = e => {
      // let equationTemp = equation;
      // const pressedButton = e.target.innerHTML;
      const key = e.target;
      const action = e.target.getAttribute('data-action');
      const keyContent = key.textContent;
      const displayedNum = display.textContent;
      const calculator = document.querySelector('.calculator')
      const previousKeyType = calculator.dataset.previousKeyType;

      console.log(keyContent)
      console.log(e.target.getAttribute('data-action'))
      if (!action) {
        console.log('number key!')
        calculator.dataset.previousKeyType = 'number'
        if (result === '0' || previousKeyType === 'operator') {
          setResult(keyContent);
        } else { 
          setResult(result + keyContent);
        }
      }

      document.querySelector('.keypad').querySelectorAll('.btn').forEach(k => k.classList.remove('is-depressed'))
      

      

      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' ||
        action === 'percentage'
        ) {
          console.log('operator key!')
          
          key.classList.add('is-depressed')

          // Add custom attribute
          // make previousKeyType into state
          calculator.dataset.previousKeyType = 'operator'
          calculator.dataset.firstValue = result;
          calculator.dataset.operator = action;
      }

      if (action === 'decimal') {
        console.log('decimal key!')
        calculator.dataset.previousKeyType = 'decimal'
        if (!result.includes('.')) {
          setResult(result + '.')
        }
      }

      if (action === 'clear') {
        console.log('clear key!')
        calculator.dataset.previousKeyType = 'clear'
      }

      if (action === 'calculate') {
        console.log('equal key!')
        calculator.dataset.previousKeyType = 'calculate'
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = result;

        setResult(calculate(firstValue, operator, secondValue))
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

    const calculate = (n1, operator, n2) => {
      let result = ''

      if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
      } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
      } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
      } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
      }

      return result
    }

    return (
      <main className="calculator">
        <Screen equation={equation} result={result} />
        <Keypad onButtonPress={onButtonPress} />
      </main>
    )
}

export default Calculator

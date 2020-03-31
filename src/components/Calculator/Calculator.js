import React, { useState } from 'react'
import Screen from './Screen/Screen'
import Keypad from './Keypad/Keypad'

function Calculator() {

    const [equation, setEquation] = useState('');
    const [result, setResult] = useState('0');
    // const [display, setDisplay] = useState('0');
    const [firstValue, setFirstValue] = useState('')
    const [operator, setOperator] = useState('')
    const [secondValue, setSecondValue] = useState('')
    const [previousKey, setPreviousKey] = useState('')

    const onButtonPress = e => {
      let equationTemp = equation;
      const pressedButton = e.target.innerHTML;
      const key = e.target;
      const action = e.target.getAttribute('data-action');
      const keyContent = key.textContent;
      // const displayedNum = display.textContent;
      const calculator = document.querySelector('.calculator')
      // const previousKeyType = calculator.dataset.previousKeyType;

      // console.log(keyContent)
      // console.log(e.target.getAttribute('data-action'))
      // if (!action) {
      //   // console.log('number key!')
        
      //   if (result === '0' || previousKey === 'operator') {
      //     setResult(keyContent);
      //   } else { 
      //     setResult(result + keyContent);
      //   }

      //   setPreviousKey('number');
      //   console.log("firstValue: ", firstValue, "operator: ", operator, "secondValue: ", secondValue, "previousKey: ", previousKey)
      // }

      // document.querySelector('.keypad').querySelectorAll('.btn').forEach(k => k.classList.remove('is-depressed'))
      

      

      // if (
      //   action === 'add' ||
      //   action === 'subtract' ||
      //   action === 'multiply' ||
      //   action === 'divide' ||
      //   action === 'percentage'
      //   ) {
      //     // console.log('operator key!')
          
      //     // const firstValue = calculator.dataset.firstValue;
      //     // console.log('firstValue: ', firstValue);
      //     // const operator = calculator.dataset.operator;
      //     // console.log('operator: ', operator);
      //     // setSecondValue(result);
      //     // console.log('secondValue: ', secondValue);

      //     if (firstValue && operator && previousKey !== 'operator') {
      //       const calcValue = calculate(firstValue, operator, secondValue)
      //       console.log('calcValue: ', calcValue);
      //       setResult(calcValue)

      //       // update calculated value as firstValue
      //       setFirstValue(calcValue)
      //     } else if (firstValue) {
      //       // if there are no calculations, set result as the firstValue
      //       setResult(firstValue);
      //     }

      //     key.classList.add('is-depressed')

      //     // Add custom attribute
      //     setPreviousKey('operator');
      //     setFirstValue(result)
      //     setOperator(action);
      //     console.log("firstValue: ", firstValue, "operator: ", operator, "secondValue: ", secondValue, "previousKey: ", previousKey)
      // }

      // if (action === 'decimal') {
      //   console.log('decimal key!')
        
      //   if (!result.includes('.')) {
      //     setResult(result + '.')
      //   } else if (previousKey === 'operator') {
      //     setResult('0.')
      //   }

      //   setPreviousKey('decimal');
      //   console.log("firstValue: ", firstValue, "operator: ", operator, "secondValue: ", secondValue, "previousKey: ", previousKey)
      // }

      // if (action === 'clear') {
      //   console.log('clear key!')
      //   return clear()
      // }

      // if (action === 'calculate') {
      //   console.log('equal key!')
      //   // let firstValue = calculator.dataset.firstValue;
      //   // const operator = calculator.dataset.operator;
      //   console.log(result)
      //   setSecondValue(result);
      //   console.log(secondValue)

      //   if (firstValue) {
      //     if (previousKey === 'calculate') {
      //       setResult(firstValue)
      //       setSecondValue(calculator.dataset.modValue);
      //     }
      //     setResult(calculate(firstValue, operator, secondValue))
      //   }
      //   calculator.dataset.modValue = secondValue;
      //   setPreviousKey('calculate');
      //   console.log("firstValue: ", firstValue, "operator: ", operator, "secondValue: ", secondValue, "previousKey: ", previousKey)
      // }

      // handle clear
      if (pressedButton === 'C') {
        setPreviousKey('clear')
        return clear();
      }
      // handle numbers
      else if (!action) {
        equationTemp += pressedButton;
        setPreviousKey('number')
      }
      // handle decimals
      else if (action === 'decimal') {
        // check if last key was a decimal
        const isDecimal = equationTemp.charAt(equationTemp.length - 1) === '.';
        // console.log(isDecimal)
        if (!isDecimal) {
          if (equationTemp === '') {
            equationTemp += '0.';  
          } else {
            equationTemp += '.';
          }
        } else if (previousKey === 'operator') {
          equationTemp += '0.';
        }
    
        setPreviousKey('decimal');
      }
      // handle operations
      else if (action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' ||
        action === 'percentage') {
          if (previousKey !== 'operator') {
            equationTemp += ' ' + pressedButton + ' ';
          } else {
            equationTemp = equationTemp.slice(0, -3) + ' ' + pressedButton + ' ';
            console.log("equationTemp: ", equationTemp)
          }
          setPreviousKey('operator')
      }
      // handle equals
      else if (action === 'calculate') {
        try {
          
          const evalResult = eval(equationTemp);
          const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
          setResult(result);
        } catch (error) {
          setResult('ERROR');
        }
        setPreviousKey('calculate')
      }
      // handle delete
      else {
        equationTemp = equationTemp.trim();
        equationTemp = equationTemp.substr(0, equationTemp.length - 1);
      }
                  
      setEquation(equationTemp);
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

    const clear = () => {
      setResult('0')
      setFirstValue('')
      setOperator('')
      setSecondValue('')
      setPreviousKey('clear');
      setEquation('')
    }

    return (
      <main className="calculator">
        <Screen equation={equation} result={result} />
        <Keypad onButtonPress={onButtonPress} />
      </main>
    )
}

export default Calculator

import React, { useState } from 'react'
import Screen from './Screen/Screen'
import Keypad from './Keypad/Keypad'

function Calculator() {

    const [equation, setEquation] = useState('');
    const [result, setResult] = useState(0);

    return (
      <main className="calculator">
        <Screen equation={equation} result={result} />
        <Keypad />
      </main>
    )
}

export default Calculator

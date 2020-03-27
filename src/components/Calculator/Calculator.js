import React, { useState, useEffect } from 'react'
import Screen from './Screen/Screen'
import Keypad from './Keypad/Keypad'

function Calculator() {

    return (
      <main className="calculator">
        <Screen />
        <Keypad />
      </main>
    )
}

export default Calculator

import React from 'react'
import KeypadRow from './KeypadRow/KeypadRow'

function Keypad() {
    return (
        <section className="keypad">
            <KeypadRow />
            <KeypadRow />
            <KeypadRow />
            <KeypadRow />
            <KeypadRow />
        </section>
    )
}

export default Keypad

import React from 'react'

function KeypadRow(props) {
    return (
        <div className="keypad__row">
            {props.children}
        </div>
    )
}

export default KeypadRow
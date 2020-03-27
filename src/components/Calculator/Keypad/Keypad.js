import React from 'react'
import KeypadRow from './KeypadRow/KeypadRow'
import Button from './Button'

function Keypad(props) {
    return (
      <section className="keypad">
        <KeypadRow>
          <Button onButtonPress={props.onButtonPress} action="clear">C</Button>
          <Button onButtonPress={props.onButtonPress} action="delete">&larr;</Button>
          <Button onButtonPress={props.onButtonPress} action="percentage">%</Button>
          <Button onButtonPress={props.onButtonPress} action="divide">/</Button>
        </KeypadRow>

        <KeypadRow>
          <Button onButtonPress={props.onButtonPress}>9</Button>
          <Button onButtonPress={props.onButtonPress}>8</Button>
          <Button onButtonPress={props.onButtonPress}>7</Button>
          <Button onButtonPress={props.onButtonPress} action="multiply">*</Button>
        </KeypadRow>

        <KeypadRow>
          <Button onButtonPress={props.onButtonPress}>6</Button>
          <Button onButtonPress={props.onButtonPress}>5</Button>
          <Button onButtonPress={props.onButtonPress}>4</Button>
          <Button onButtonPress={props.onButtonPress} action="subtract">-</Button>
        </KeypadRow>

        <KeypadRow>
          <Button onButtonPress={props.onButtonPress}>3</Button>
          <Button onButtonPress={props.onButtonPress}>2</Button>
          <Button onButtonPress={props.onButtonPress}>1</Button>
          <Button onButtonPress={props.onButtonPress} action="add">+</Button>
        </KeypadRow>

        <KeypadRow>
          <Button onButtonPress={props.onButtonPress}>0</Button>
          <Button onButtonPress={props.onButtonPress} action="decimal">.</Button>
          <Button onButtonPress={props.onButtonPress} type="large" action="equals">=</Button>
        </KeypadRow>
      </section>
    );
}

export default Keypad

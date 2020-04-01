import React from 'react'
import KeypadRow from './KeypadRow/KeypadRow'
import Button from './Button'

function Keypad(props) {
    return (
      <section className="keypad">
        <KeypadRow>
          <Button onButtonPress={props.onButtonPress} type="red" action="clear">C</Button>
          <Button onButtonPress={props.onButtonPress} type="red" action="delete">&rarr;</Button>
          <Button onButtonPress={props.onButtonPress} type="red" action="percentage">%</Button>
          <Button onButtonPress={props.onButtonPress} type="red" action="divide">/</Button>
        </KeypadRow>

        <KeypadRow>
          <Button onButtonPress={props.onButtonPress} type="number">9</Button>
          <Button onButtonPress={props.onButtonPress} type="number">8</Button>
          <Button onButtonPress={props.onButtonPress} type="number">7</Button>
          <Button onButtonPress={props.onButtonPress} type="red" action="multiply">*</Button>
        </KeypadRow>

        <KeypadRow>
          <Button onButtonPress={props.onButtonPress} type="number">6</Button>
          <Button onButtonPress={props.onButtonPress} type="number">5</Button>
          <Button onButtonPress={props.onButtonPress} type="number">4</Button>
          <Button onButtonPress={props.onButtonPress} type="red" action="subtract">-</Button>
        </KeypadRow>

        <KeypadRow>
          <Button onButtonPress={props.onButtonPress} type="number">3</Button>
          <Button onButtonPress={props.onButtonPress} type="number">2</Button>
          <Button onButtonPress={props.onButtonPress} type="number">1</Button>
          <Button onButtonPress={props.onButtonPress} type="red" action="add">+</Button>
        </KeypadRow>

        <KeypadRow>
          <Button onButtonPress={props.onButtonPress} type="number">0</Button>
          <Button onButtonPress={props.onButtonPress} type="number" action="decimal">.</Button>
          <Button onButtonPress={props.onButtonPress} type="large red" action="calculate">=</Button>
        </KeypadRow>
      </section>
    );
}

export default Keypad

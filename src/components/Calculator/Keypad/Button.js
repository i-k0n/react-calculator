import React from 'react'

function Button(props) {

    const classes = ['btn'];

    if (typeof props !== 'undefined' && typeof props.type !== 'undefined') {
        const typeArray = props.type.split(' ')
        typeArray.forEach(e => {
            classes.push('btn--' + e);    
        });
        
    }

    return (
        <button 
            className={classes.join(' ')} 
            onClick={props.onButtonPress} 
            data-action={props.action}
        >
            {props.children}
        </button>
    )
}

export default Button

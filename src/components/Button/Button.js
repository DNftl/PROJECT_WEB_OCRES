import React from 'react';
import './Button.css';


function Button({ children, ...rest }) {
    return (
        <button id="monButton" {...rest}>Form
            {children}
        </button>
    );
}

export default Button;
import React from 'react';
import './Button/Button.css';


function Button({ children, ...rest }) {
    return (
        <button id="monButton" {...rest}>Rentrer mes données
            {children}
        </button>
    );
}

export default Button;
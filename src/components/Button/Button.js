import React from 'react';
import './Button.css';


function Button({ children, ...rest }) {
    return (
        <button id="monButton" {...rest}>Formulaire
            {children}
        </button>
    );
}

export default Button;
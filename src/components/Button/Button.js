import React from 'react';
import './Button.css';
import {Link} from "react-router-dom";


function Button({ children, ...rest }) {
    return (
        <button id="monButton" {...rest}>
                <Link to ="/formulaire">Form</Link>

                
            {children}
        </button>
    );
}

export default Button;
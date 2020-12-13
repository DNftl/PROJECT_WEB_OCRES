import React from 'react';
import './Button.css';
import {Link} from "react-router-dom";


function Formpie({ children, ...rest }) {
    return (
        <button id="monButton" {...rest}>
                <Link to ="/formulairepie">Form</Link>

                
            {children}
        </button>
    );
}

export default Formpie;
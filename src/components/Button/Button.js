/*import React from 'react';
import './Button.css';


function Button({ children, ...rest }) {
    return (
        <button id="monButton" {...rest}>Form
            {children}
        </button>
    );
}

export default Button;
*/

import React from 'react';
import './Button.css';
import {Link,Router, NavLink,Switch,Route,BrowserRouter} from "react-router-dom";
import Form from './formulaire';



function Button({ children, ...rest }) {
    return (
        <button id="monButton" {...rest}>
            <BrowserRouter>
                <Link to ={"./formulaire"}>Form</Link>
                <Route path="./formulaire" component={Form}/> 
            </BrowserRouter>
            
            {children}
        </button>
    );
}

export default Button;
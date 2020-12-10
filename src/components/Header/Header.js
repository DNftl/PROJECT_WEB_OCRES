import React from 'react';
import './Header.css';

const Header = ({ children }) => {
  
  return (
    <header>
        <div class="wrapper">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            
              <h2 id ="monHeader"> 
                { children }
              </h2>
              
            </div>
          </div>
        </div>
    </header>



  )
}

export default Header;
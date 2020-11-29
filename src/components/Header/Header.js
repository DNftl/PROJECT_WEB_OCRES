import React from 'react';
import './Header.css';

const Header = ({ children }) => {
  return (
    <h2 id ="monHeader">Dashboard 
      { children }
    </h2>
  )
}

export default Header;
import React from 'react';
import './Header.css';

const Header = ({ children }) => {
  return (
    <h2 id ="monHeader">Dashboard affichage
      { children }
    </h2>
  )
}

export default Header;
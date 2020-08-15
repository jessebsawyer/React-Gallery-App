import React from 'react';
import {NavLink} from 'react-router-dom';

// Displays Nav Links
const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/trees'>Trees </NavLink></li>
      <li><NavLink to='/sun'>Sun</NavLink></li>
      <li><NavLink to='/ocean'>Ocean</NavLink></li>
    </ul>
  </nav>
)

export default Nav;
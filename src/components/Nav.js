import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><Link to='/cats'>Cats </Link></li>
      <li><Link to='/dogs'>Dogs</Link></li>
      <li><Link to='/monkeys'>Monkeys</Link></li>
    </ul>
  </nav>
)

export default Nav;
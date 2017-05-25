import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav>
      <h1>CraftNY Reddit</h1>
      <ul>
        <li><Link to="/">All posts</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

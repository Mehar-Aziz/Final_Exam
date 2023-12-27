import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div>
      <a href="/">
        <img  src="" alt="logo" />
      </a>
      <span >Space Travelers Hub</span>

    </div>
    <nav>
      <NavLink to="/">Dragon</NavLink>
      <NavLink to="/missions">Missions</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
    </nav>
  </header>
);

export default Navbar;

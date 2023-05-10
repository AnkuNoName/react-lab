import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <nuv>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nuv>
      <Outlet />
    </header>
  );
};

export default Header;
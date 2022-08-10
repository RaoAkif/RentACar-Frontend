import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const navLinks = {
  listStyle: 'none',
  display: 'flex',
  color: 'azure',
};

function Header() {
  return (
    <div className="header">
      <div className="nav-bar-left">
        <h2 className="logo">MY_LOGO_TEXT</h2>
        <nav>
          <ul style={navLinks}>
            <li>
              <Link className="navLink" to="/">Cake Counter</Link>
            </li>
            <li>
              <Link className="navLink" to="/icecream">Ice cream Counter</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;

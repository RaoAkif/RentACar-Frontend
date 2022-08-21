import { Link, NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { GiTriangleTarget } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../img/rentacar_logo.svg';
import './Header.css';

function Navbar({ handleMobileMenu }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { name } = JSON.parse(localStorage.getItem('user')) || {};

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('user') !== null);
  }, []);

  const handleAuth = () => {
    if (isLoggedIn) {
      localStorage.removeItem('user');
      setIsLoggedIn(false);
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <nav className="navigation">
      <div className="navigation-menu">
        <Link
          className="logo"
          to="/"
          onClick={handleMobileMenu}
        >
          <Logo />
        </Link>
        <ul>
          <li>
            <h1>
              {isLoggedIn ? `User: ${name}` : 'Not logged in'}
            </h1>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/"
              onClick={handleMobileMenu}
            >
              CARS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/rentals"
              onClick={handleMobileMenu}
            >
              RENTALS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/add_rental"
              onClick={handleMobileMenu}
            >
              ADD A RENTAL
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/add_car"
              onClick={handleMobileMenu}
            >
              ADD A CAR
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/delete_car"
              onClick={handleMobileMenu}
            >
              DELETE A CAR
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/login"
              onClick={handleAuth}
            >
              {isLoggedIn ? 'LOGOUT' : 'LOGIN'}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-footer">
        © 2022 Microverse
      </div>
      <div className="close-btn">
        <GiTriangleTarget className="close-arrow" onClick={handleMobileMenu} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  handleMobileMenu: PropTypes.func.isRequired,
};

export default Navbar;

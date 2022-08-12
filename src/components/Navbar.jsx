import { Link, NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ReactComponent as Logo } from '../img/rentacar_logo.svg';

function Navbar({ handleMobileMenu }) {
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
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/"
              onClick={handleMobileMenu}
            >
              MODELS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/icecream"
              onClick={handleMobileMenu}
            >
              RENTALS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/users"
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
        </ul>
      </div>
      <div className="nav-footer">
        © 2022 Microverse
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  handleMobileMenu: PropTypes.func.isRequired,
};

export default Navbar;

import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Transition } from 'react-transition-group';
import { AiOutlineClose } from 'react-icons/ai';
import { GiTriangleTarget } from 'react-icons/gi';
import { ReactComponent as Logo } from '../assets/images/rentacar_logo.svg';
import './Header.css';

function Navbar({ handleMenu, transitionState, transitions }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { name } = JSON.parse(localStorage.getItem('user')) || {};
  const [desktopState, setDesktopState] = useState(false);

  const handleAuth = () => {
    if (isLoggedIn) {
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      window.location.href = '/login';
    }
  };

  const handleWindowSize = () => {
    const resolution = window.innerWidth;
    const isMobile = resolution >= 0 && resolution <= 480;
    const isDesktop = !isMobile;
    if (isDesktop) {
      setDesktopState(true);
    } else {
      setDesktopState(false);
    }
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('user') !== null);
    handleWindowSize();
  }, [transitionState]);

  const handleCloseMenu = () => {
    if (!desktopState) {
      handleMenu();
    }
  };

  return (
    <Transition in={transitionState} timeout={300}>
      {(state) => (
        <nav
          style={{
            transition: 'all .2s',
            opacity: 0,
            display: 'none',
            ...transitions[state],
          }}
          className="navigation"
        >
          <AiOutlineClose
            className="close-btn-mobile"
            onClick={handleMenu}
          />
          <div className="navigation-menu">
            <Link
              className="logo"
              to="/"
              onClick={handleCloseMenu}
            >
              <Logo />
            </Link>

            <p className="user-name">
              Signed in as&nbsp;
              <span>{name}</span>
            </p>

            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/"
                  onClick={handleCloseMenu}
                >
                  CARS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/add_rental"
                  onClick={handleCloseMenu}
                >
                  NEW RENTAL
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/rentals"
                  onClick={handleCloseMenu}
                >
                  RENTALS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/add_car"
                  onClick={handleCloseMenu}
                >
                  ADD CAR
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/delete_car"
                  onClick={handleCloseMenu}
                >
                  DELETE CAR
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
            <GiTriangleTarget className="close-arrow" onClick={handleMenu} />
          </div>
        </nav>
      )}
    </Transition>
  );
}

Navbar.propTypes = {
  handleMenu: PropTypes.func.isRequired,
  transitionState: PropTypes.bool.isRequired,
  transitions: PropTypes.shape({
    entering: PropTypes.shape({
      display: PropTypes.string,
    }),
    entered: PropTypes.shape({
      opacity: PropTypes.number,
      display: PropTypes.string,
    }),
    exiting: PropTypes.shape({
      opacity: PropTypes.number,
      display: PropTypes.string,
    }),
    exited: PropTypes.shape({
      opacity: PropTypes.number,
      display: PropTypes.string,
    }),
  }),
};

Navbar.defaultProps = {
  transitions: [],
};

export default Navbar;

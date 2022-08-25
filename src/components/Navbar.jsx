import React, { useRef, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Transition } from 'react-transition-group';
import { AiOutlineClose } from 'react-icons/ai';
import { GiTriangleTarget } from 'react-icons/gi';
import { ReactComponent as Logo } from '../assets/images/rentacar_logo.svg';
import './Header.css';

function Navbar({
  handleCloseMenu, setTransitionState, transitionState, transitions,
}) {
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

  // Reload the page on windows rezise to close the navbar.
  const handleResize = () => {
    window.location.reload();
  };
  window.addEventListener('resize', handleResize);

  /* Open the navbar on desktop version
  and close it on mobile version
  when the page is rendered. */
  const handleTransitionState = async () => {
    const resolution = window.innerWidth;
    const isMobile = resolution >= 0 && resolution <= 480;
    const isDesktop = !isMobile;
    if (isDesktop) {
      setTransitionState(true);
    } else {
      setTransitionState(false);
    }
  };

  useEffect(() => {
    handleTransitionState();
  }, []);

  // Get the windows size when the hamburger icon is clicked.
  const handleWindowSize = async () => {
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

  // Close the navbar when a link is clicked
  const handleMenu = () => {
    if (!desktopState) {
      handleCloseMenu();
    }
  };

  const nodeRef = useRef(null);

  return (
    <Transition nodeRef={nodeRef} in={transitionState} timeout={300}>
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
            onClick={handleCloseMenu}
          />
          <div className="navigation-menu">
            <Link
              className="logo"
              to="/"
              onClick={handleMenu}
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
                  className={({ isActive }) => (isActive ? 'active sep' : 'sep')}
                  to="/"
                  onClick={handleMenu}
                >
                  CARS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/add_rental"
                  onClick={handleMenu}
                >
                  NEW RENTAL
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/rentals"
                  onClick={handleMenu}
                >
                  RENTALS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active sep' : 'sep')}
                  to="/add_car"
                  onClick={handleMenu}
                >
                  ADD CAR
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/delete_car"
                  onClick={handleMenu}
                >
                  DELETE CAR
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active sep' : 'sep')}
                  to="/login"
                  onClick={handleAuth}
                >
                  LOGOUT
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-footer">
            © 2022 Microverse
          </div>
          <div className="close-btn-container">
            <GiTriangleTarget className="close-arrow" onClick={handleCloseMenu} />
          </div>
        </nav>
      )}
    </Transition>
  );
}

Navbar.propTypes = {
  handleCloseMenu: PropTypes.func.isRequired,
  setTransitionState: PropTypes.func.isRequired,
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

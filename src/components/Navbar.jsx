import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Transition } from 'react-transition-group';
import { AiOutlineClose } from 'react-icons/ai';
import { GiTriangleTarget } from 'react-icons/gi';
import { ReactComponent as Logo } from '../img/rentacar_logo.svg';
import './Header.css';

function Navbar({ handleMenu, transitionState, transitions }) {
  const [desktopState, setDesktopState] = useState(false);

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

  const handleCloseMenu = () => {
    if (!desktopState) {
      handleMenu();
    }
  };

  useEffect(() => {
    handleWindowSize();
  }, [transitionState]);

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
                  to="/rentals"
                  onClick={handleCloseMenu}
                >
                  RENTALS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/add_rental"
                  onClick={handleCloseMenu}
                >
                  ADD A RENTAL
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/add_car"
                  onClick={handleCloseMenu}
                >
                  ADD A CAR
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to="/delete_car"
                  onClick={handleCloseMenu}
                >
                  DELETE A CAR
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
  transitions: PropTypes.arrayOf(PropTypes.shape({
    entering: PropTypes.arrayOf(PropTypes.shape({
      display: PropTypes.string,
    })),
    entered: PropTypes.arrayOf(PropTypes.shape({
      opacity: PropTypes.number,
      display: PropTypes.string,
    })),
    exiting: PropTypes.arrayOf(PropTypes.shape({
      opacity: PropTypes.number,
      display: PropTypes.string,
    })),
    exited: PropTypes.arrayOf(PropTypes.shape({
      opacity: PropTypes.number,
      display: PropTypes.string,
    })),
  })),
};

Navbar.defaultProps = {
  transitions: [],
};

export default Navbar;

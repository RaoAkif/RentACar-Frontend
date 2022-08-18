import { useState } from 'react';
import './Header.css';
import { HiMenuAlt4 } from 'react-icons/hi';
import Navbar from './Navbar';

function Header() {
  const [transitionState, setTransitionState] = useState(false);
  const transitions = {
    entering: {
      display: 'flex',
    },
    entered: {
      opacity: 1,
      display: 'flex',
    },
    exiting: {
      opacity: 0,
      display: 'flex',
    },
    exited: {
      opacity: 0,
      display: 'none',
    },
  };

  const handleMenu = () => {
    setTransitionState(!transitionState);
  };

  return (
    <>
      <Navbar
        handleMenu={handleMenu}
        transitionState={transitionState}
        transitions={transitions}
      />
      <header>
        <HiMenuAlt4 className="hamburger" onClick={handleMenu} />
      </header>
    </>
  );
}

export default Header;

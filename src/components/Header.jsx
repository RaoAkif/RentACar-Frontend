import { useState } from 'react';
import './Header.css';
import { HiMenuAlt4 } from 'react-icons/hi';
import Navbar from './Navbar';

function Header() {
  const [transitionState, setTransitionState] = useState(true);

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

  const handleCloseMenu = () => {
    setTransitionState(!transitionState);
  };

  return (
    <>
      <Navbar
        handleCloseMenu={handleCloseMenu}
        transitionState={transitionState}
        setTransitionState={setTransitionState}
        transitions={transitions}
      />
      <header>
        <HiMenuAlt4 className="hamburger" onClick={handleCloseMenu} />
      </header>
    </>
  );
}

export default Header;

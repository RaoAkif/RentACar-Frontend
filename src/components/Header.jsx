import { useState } from 'react';
import './Header.css';
import { HiMenuAlt4 } from 'react-icons/hi';
import Navbar from './Navbar';

function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleMobileMenu = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <>
      {
        isNavExpanded && <Navbar handleMobileMenu={handleMobileMenu} />
      }
      <header>
        <HiMenuAlt4 className="hamburger" onClick={handleMobileMenu} />
      </header>
    </>
  );
}

export default Header;

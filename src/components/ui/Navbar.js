import React, { useState, useEffect } from 'react';
import { ButtonLog } from '../Buttons/LogInB';
import { Link } from 'react-router-dom';
import './uiCSS/Navbar.css';
import IMAGES from '../../assets/index';
import { useAuth0 } from '@auth0/auth0-react';


// General Navigation Bar for the Web Application
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/home' className='navbar-logo' onClick={closeMobileMenu} >
            PARKWISE
            <i class='fab fa-typo3' />
            {/* <img src={require(IMAGES.logo) } alt=""/> */}
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/gmaps'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                P-Maps
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to='/log-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Log in
              </Link>
            </li>
          </ul>
          {button && <ButtonLog buttonStyle='btn--outline'>Log in</ButtonLog>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;


function vLink(){


}

// to={`/${vLink()}`}

/*
Navbar: W
Navigation bar component utilized for displaying and interacting with clickable header links for
page navigation between the application.

~Parkwise-Frontend, Developed by Eduardo Rivera
*/
import React, { useState, useEffect } from 'react';
import { ButtonLog } from '../Buttons/LogInB';
import { Link } from 'react-router-dom';
import './uiCSS/Navbar.css';
import { useAuth0 } from '@auth0/auth0-react';

import axios from 'axios';

import { useNavigate } from "react-router";



// General Navigation Bar for the Web Application
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const [token, setToken] = useState(localStorage.getItem('token') || '');
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   axios.post('http://192.168.0.5:9193/authenticate/login', { username, password })
  //     .then(response => {
  //       // Store the JWT token in local storage
  //       token = response.data.token;
  //       localStorage.setItem('token', token);

  //       // Redirect the user to the home page
  //       props.navigation.navigate('ProfileUser');
  //       alert('welcome back', username);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       setError('Invalid username or password');
  //     });
  // };


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

            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Profile
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


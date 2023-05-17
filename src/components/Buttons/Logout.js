/*
Navbar LogIn Button Component: 
Provides a navigation interface for the login page where the user can log in to or sign up for a new account.
The Button Component is styled via the LoginB.css and its main function is to provide a click event that activates 
a Link component towards the desired page.

~Parkwise-Frontend, Developed by Eduardo Rivera
*/
import React from 'react';
import './ButtonsCSS/LoginB.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const STYLES = ['lbtn--primary', 'lbtn--outline', 'lbtn--test'];

const SIZES = ['lbtn--medium', 'lbtn--large'];

// const handleClick = () => {'/login-in'};


//Login Button Component
export const LogOut = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <Link to='/log-in' className='lbtn-mobile'>
    
      <button
        className={`lbtn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={() => loginWithRedirect()} //handleClick can be used instead of onClick
        type={type}
        
      >
      
        
      {children}
         
      </button>
   </Link>  
  );
};

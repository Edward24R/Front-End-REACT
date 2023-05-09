
import React from 'react';
import './ButtonsCSS/LoginB.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

// const handleClick = () => {'/login-in'};


//Login Button Component
export const ButtonLog = ({
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
    <Link to='/log-in' className='btn-mobile'>
    
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={() => loginWithRedirect()} //handleClick can be used instead of onClick
        type={type}
        
      >
      
        
      {children}
         
      </button>
   </Link>  
  );
};

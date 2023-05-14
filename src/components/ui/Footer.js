/*




~Parkwise-Frontend, Developed by Eduardo Rivera
*/
import React from 'react';
import './uiCSS/Footer.css';
import { ButtonLog } from '../Buttons/LogInB';
import { Link } from 'react-router-dom';


//Footer Component for General use
function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Keep an eye out for our updated Parkwise locations!
        </p>
        <p className='footer-subscription-text'>
        
        </p>
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <ButtonLog buttonStyle='btn--outline'>Join</ButtonLog>
          </form>
        </div> */}
      </section>
   
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/home' className='social-logo'>
              PARKWISE
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>PARKWISE © 2020</small>
          <div class='social-icons'>
          <p style={{ color: 'white' }}>Coming Soon</p>
            <Link
              class='social-icon-link facebook'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

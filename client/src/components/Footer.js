import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(props) {

  return (
    <nav className='footer'>
      <div className='footer__nav'>
        <Link to='/studenthomepage'>
          <img className='footer__logo' src='https://sportslearning.online/uploads/system/dark_logoPKSWizUk22DZzqR0u0jphsXg4f5dLslP.png' alt='' />
        </Link>
        <Link to='/channels' className='footer__link'>
          <span className='footer__optionLine'>
            Sports Complex institute
          </span>
        </Link>
      </div>
      <div className='footer__nav'>
        <Link to='/about' className='footer__link'>
          <span className='footer__optionLine'>
            About
          </span>
        </Link>
        <Link to='/privacypolicy' className='footer__link'>
          <span className='footer__optionLine'>
            Privacy Policy
          </span>
        </Link>
        <Link to='/termsandconditions' className='footer__link'>
          <span className='footer__optionLine'>
            Terms and Conditions
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Footer

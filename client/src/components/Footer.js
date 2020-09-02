import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(props) {

  return (
    <nav className='footer'>
      <div className='header__nav'>
        <Link to='/studenthomepage'>
          <img className='header__logo' src='https://sportslearning.online/uploads/system/dark_logoPKSWizUk22DZzqR0u0jphsXg4f5dLslP.png' alt='' />
        </Link>
        <Link to='/channels' className='header__link'>
          <span className='header__optionLine'>
            Sports Complex institute
          </span>
        </Link>
      </div>
      <div className='header__nav'>
        <Link to='/about' className='header__link'>
          <span className='header__optionLine'>
            About
          </span>
        </Link>
        <Link to='/privacypolicy' className='header__link'>
          <span className='header__optionLine'>
            Privacy Policy
          </span>
        </Link>
        <Link to='/termsandconditions' className='header__link'>
          <span className='header__optionLine'>
            Terms and Conditions
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Footer

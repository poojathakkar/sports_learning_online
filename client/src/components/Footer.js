import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import  SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 
import { AuthContext } from './AuthProvider';

function Footer(props) {

  const { user, setUser } = useContext(AuthContext);
  const [value, setValue] = useState("");

  function logOut() {
    setUser(null);
  }  

  return (
    <nav className='footer'>
      <Link to='/studenthomepage'>
        <img className='header__logo' src='https://sportslearning.online/uploads/system/dark_logoPKSWizUk22DZzqR0u0jphsXg4f5dLslP.png' alt='' />
      </Link>

    <div className='header__nav'>
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

      <Link to='/privacypolicy' className='header__option'>
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

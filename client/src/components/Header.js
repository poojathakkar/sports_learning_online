import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import  SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 
import { AuthContext } from './AuthProvider';


function Header(props) {
  //const [{ basket }] = useStateValue();
  const { user, setUser } = useContext(AuthContext)

   console.log("headerUser", user);

  

  return (
    <nav className='header'>
    <Link to='/'>
      <img className='header__logo' src='https://sportslearning.online/uploads/system/dark_logoPKSWizUk22DZzqR0u0jphsXg4f5dLslP.png' alt='' />
    </Link>

    <div className='header__nav'>
      <Link to='/channels' className='header__link'>
        <span className='header__optionLine'>
          Channels
        </span>
      </Link>

      <Link to='/courses' className='header__link'>
        <span className='header__optionLine'>
          Courses
        </span>
      </Link>
    </div>

   
    <div className='header__search'>
      <input type='text' className='header__searchInput' />
      <SearchIcon className='header__searchIcon' />
    </div>

    <div className='header__nav'>
      <Link to='/login' className='header__link'>
        <div className='header__option'>
          <span className='header__optionFirst'>Welcome</span>
          <span className='header__optionSecond'>{user.first_name}</span>
        </div>
      </Link> 

      <Link to='/profile/edit' className='header__link'>
        <div className='header__option'>
          <span className='header__optionFirst'>Your</span>
          <span className='header__optionSecond'>Profile</span>
        </div>
      </Link>

      <Link to='/checkout' className='header__link'>
        <div className='header__optionBasket'>
          <ShoppingCartIcon />
            <span className='header__optionSecond header__basketCount'>{props.basket?.length}</span>
        </div>
      </Link>
    </div>
 
    </nav>
  )
}

export default Header

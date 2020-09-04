import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import  SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 
import { AuthContext } from './AuthProvider';

function Header(props) {

  const { user, setUser } = useContext(AuthContext);
  const [value, setValue] = useState("");

  function logOut() {
    setUser(null);
  }  
  

  return (
    <nav className='header'>
      <Link to='/studenthomepage'>
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
      <div className="header__search">
        <form className="search__form" onSubmit={event => event.preventDefault()}>
          <input
            className="radius"
            spellCheck="false"
            name="search"
            type="text"
            value={value}
            onChange={event => {setValue(event.target.value);props.onSearchTermUpdate(event.target.value)}}
          />
          <div className="header__icon">
          <Link to= '/result' >
            <SearchIcon className='header__searchIcon' />
          </Link> 

          </div>
           
        </form>
      </div>   

      <div className='header__nav'>
        <div className='header__bas'>
        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingCartIcon />
              <span className='header__optionSecond header__basketCount'>{props.basket?.length}</span>
          </div>
        </Link>

        </div>
        <Link to='/editProfile' className='header__link'>
          <div className='header__option'>
              <span className='header__optionFirst'>Welcome</span>
              <span className='header__optionSecond'>{user.first_name}</span> 
          </div>
        </Link> 
          <div className='header__option'>
            <Link to="/login">
              <button className="headernav__Button mr-20" onClick={logOut} >Logout</button>
            </Link>    
          </div>
      </div>
    </nav>
  )
}

export default Header

import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import  SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 
import { AuthContext } from './AuthProvider';
//import SearchBar from './SearchBar';

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
          placeholder="Search courses"
          name="search"
          type="text"
          value={value}
          onChange={event => {setValue(event.target.value);props.onSearchTermUpdate(event.target.value)}}
        />
        <Link to= '/result' >
          <SearchIcon className='header__searchIcon' />
        </Link>
        
      </form>
    </div>  
    
    <div className='header__nav'>
      

      <Link to='/checkout' className='header__link'>
        <div className='header__optionBasket'>
          <ShoppingCartIcon />
            <span className='header__optionSecond header__basketCount'>{props.basket?.length}</span>
        </div>
      </Link>

      <Link to='/editProfile' className='header__link'>
        <div className='header__option'>
            <span className='header__optionFirst'>Welcome</span>
            <span className='header__optionSecond'>{user.first_name}</span> 
        </div>
      </Link> 

      {/* <Link to='/profile/edit' className='header__link'> */}
        <div className='header__option'>
        <Link to="/login">
          <button className="nav__Button mr-20" onClick={logOut} >Logout</button>
        </Link> 
        
        </div>
      {/* </Link> */}
    </div>
 
    </nav>
  )
}

export default Header

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './AuthorHeader.css';
import  SearchIcon from '@material-ui/icons/Search';
import { AuthContext } from './AuthProvider';


function AuthorHeader() {

  const { user, setUser } = useContext(AuthContext);

  return (
    <nav className='authorheader'>
      <Link to='/authorhomepage'>
        <img className='authorheader__logo' src='https://sportslearning.online/uploads/system/dark_logoPKSWizUk22DZzqR0u0jphsXg4f5dLslP.png' alt='' />
      </Link>

      <div className='authorheader__nav'>
        <Link to='/channels' className='authorheader__link'>
          <span className='authorheader__optionLine'>
            Channels
          </span>
        </Link>

        <Link to='/authorcourses' className='authorheader__link'>
          <span className='authorheader__optionLine'>
            My Courses
          </span>
        </Link>
      </div>

      <div className="authorheader__search">
          <input
            placeholder="Search courses"
            name="search"
            type="text"
            value=""
          />
          <Link to= '/result' >
            <SearchIcon className='authorheader__searchIcon' />
          </Link>
      </div>  
    
      <div className='authorheader__nav'>
        <Link to='/newCourse' className='authorheader__link'>
          <div className='authorheader__option'>
            <span className='authorheader__optionFirst'>Create
            </span>
            <span className='authorheader__optionSecond'>Course
            </span> 
          </div>
        </Link> 

        <Link to='/revenueReport' className='authorheader__link'>
          <div className='authorheader__option'>
              <span className='authorheader__optionFirst'>View</span>
              <span className='authorheader__optionSecond'>Report</span> 
          </div>
        </Link> 

        <Link to='/editProfile' className='authorheader__link'>
          <div className='authorheader__option'>
              <span className='authorheader__optionFirst'>Welcome</span>
              <span className='authorheader__optionSecond'>{user.first_name}</span> 
          </div>
        </Link> 

        <div className='header__option'>
          <Link to="/login">
            <button className="authornav__Button mr-20" >Logout</button>
          </Link> 
        </div>
    
      </div>
 
    </nav>
  )
}

export default AuthorHeader

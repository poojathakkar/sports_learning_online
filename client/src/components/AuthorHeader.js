import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './AuthorHeader.css';
import { AuthContext } from './AuthProvider';

function AuthorHeader() {

  const { user, setUser } = useContext(AuthContext);
  function logOut() {
    setUser(null);
  }  

  return (
    <nav className='authorheader'>
      <Link to='/authorhomepage'>
        <img className='authorheader__logo' src='https://sportslearning.online/uploads/system/dark_logoPKSWizUk22DZzqR0u0jphsXg4f5dLslP.png' alt='' />
      </Link>

      <div className='authorheader__navOne'>
        <Link to='/channels' className='authorheader__link'>
          <span className='authorheader__optionLine'>
            Channels
          </span>
        </Link>

        <Link to='/authorcourses' className='authorheader__link'>
          <span className='authorheader__optionLine'>
            Manage Courses
          </span>
        </Link>
      </div>

      <div className='authorheader__navTwo'>
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
            <button className="authornav__Button mr-20" onClick={logOut}>Logout</button>
          </Link> 
        </div>
      </div>
    </nav>
  )
}

export default AuthorHeader

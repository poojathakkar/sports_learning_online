import React, { useContext }  from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';
import { AuthContext } from './AuthProvider';

function Nav() {

  return (
   <>
    <div className='nav'>
    
      <>
      <Link to='/studenthomepage'>
        <img src='https://trello-attachments.s3.amazonaws.com/5f3d54fdc25471825210d34b/5f3d814594959d53f84e4b59/238e3e444b2edffeb4e52a6f4b0bf2e7/SPORTS_LEARNING_LOGO.png' alt='logo' />
      </Link>
      </>
      

      <div className="nav__button">
        
     {/* // {!user && (  */}
        <>
        <Link to="/login">
          <button className="nav__Button mr-20" >Login</button>
        </Link>
        <Link to="/register">
          <button className="nav__Button mr-20" >Register</button>
        </Link> 
        </>
      
        
      </div>

    </div>
   </>

  )
}

export default Nav

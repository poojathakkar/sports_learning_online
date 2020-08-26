import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';
import axios from 'axios';
import './Profile.css';


function Profile(props) {

  const { user, setUser } = useContext(AuthContext);
  const auth = useContext(AuthContext);
  const user_id = auth.user.id;

  const handleChange = (name, e) =>  {
    const target = e.target;
    let value = target.value;
    setUser({
      ...user,
      [name]: value
    });  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post(`/api/profileEdit`, {first_name: user.first_name, last_name: user.last_name, email: user.email, role: user.role})
    .then(res => {
     // setUser(res.data);
     props.history.push(`/studenthomepage`)
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="profile">
      <form onSubmit={handleSubmit} className='FormFields'>
        <div className='FormField'>
          {/* <h1><b>Update profile</b></h1> */}
          <label className='FormField__Label' htmlFor='first_name'>*First Name</label>
          <input type='text' id='first_name' className='FormField__Input' placeholder='Enter your first name' name='first_name' value={user.first_name} onChange={(e) => handleChange('first_name', e)} required/>
        </div>
        <div className='FormField'>
          <label className='FormField__Label' htmlFor='last_name'>*Last Name</label>
          <input type='text' id='last_name' className='FormField__Input' placeholder='Enter your last name' name='last_name' value={user.last_name} onChange={(e) => handleChange('last_name', e)} required/>
        </div>
        <div className='FormField'>
          <label className='FormField__Label' htmlFor='email'>*E-Mail Address</label>
          <input type='email' id='email' className='FormField__Input' placeholder='Enter your email' name='email' value={user.email} onChange={(e) => handleChange('email', e)} required/>
        </div>
        <div className='FormField'>
          <label className='FormField__Label' htmlFor='password'>*Password</label>
          <input type='password' id='password' className='FormField__Input' placeholder='Enter your password' name='password' value={user.password} onChange={(e) => handleChange('password', e)} required/>
        </div>
        <div className='FormField'>
          <label className='FormField__Label' htmlFor='role'>*Role</label>
          <input type='text' id='role' className='FormField__Input' placeholder='Are you an author or student' name='role' value={user.role} onChange={(e) => handleChange('role', e)} required/>
        </div>
        <div className='FormField'>
          <button className='FormField__Button mr-20'>Update</button>       
        </div>
      </form>
    </div> 
  )
}

export default Profile

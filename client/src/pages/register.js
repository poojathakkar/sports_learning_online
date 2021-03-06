import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './register.css';
import { AuthContext } from '../components/AuthProvider';
import { Alert } from 'reactstrap';
import Nav from '../components/Nav';

const Register = () => {

  const auth = useContext(AuthContext);
  const history = useHistory();
  const [alert, setAlert] = useState(null);

  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'student',
  })

  useEffect(() => {
    if (!alert) {
      return;
    }
    document.querySelector('html').scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [alert]);

  const handleChange = (name) => (e) => {
    const target = e.target;
    let value = ''

    if (name === 'role') {
      value = target.checked ? 'author' : 'student';
    } else {
      value = target.value
    }
    setState({
      ...state,
      [name]: value
    });
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(`/api/register`, {first_name: state.first_name, last_name: state.last_name, email: state.email, password: state.password, role: state.role})
      .then(res => {
        auth.setUser(res.data)
        const state = { msg: 'Registeration is successful!' };
        if (res.data.role === 'author') {
          history.replace('/authorhomepage', state)
        } else {
          history.replace('/studenthomepage', state)
        }
      })
      .catch((err) => {
        console.log(`err: ${err}`)
        setAlert('User already exists!');
      })
  }

  return (
  
    <>
      <Nav />
      <div className='FormCenter'>
        <form onSubmit={handleSubmit} className='FormFields'>
          {alert &&
            <Alert color="danger">
              {alert}
            </Alert>
          }
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='first_name'>First Name</label>
            <input type='text' id='first_name' className='FormField__Input' placeholder='Enter your first name' name='first_name' value={state.first_name} onChange={handleChange('first_name')} required/>
          </div>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='last_name'>Last Name</label>
            <input type='text' id='last_name' className='FormField__Input' placeholder='Enter your last name' name='last_name' value={state.last_name} onChange={handleChange('last_name')} required/>
          </div>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='email'>E-Mail Address</label>
            <input type='email' id='email' className='FormField__Input' placeholder='Enter your email' name='email' value={state.email} onChange={handleChange('email')} required/>
          </div>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='password'>Password</label>
            <input type='password' id='password' className='FormField__Input' placeholder='Enter your password' name='password' value={state.password} onChange={handleChange('password')} required/>
          </div>
          <div className='FormField'>
            <label className='FormField__CheckboxLabel'>
              <input className='FormField__Checkbox' type='checkbox' name='role' value={state.role} onChange={handleChange('role')} /> I am an <b>Author</b>
            </label>
          </div>
          <div className='FormField'>
            <button className='FormField__Button mr-20'>Register</button> <Link to='/login' className='FormField__Link'>I'm already member</Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default Register
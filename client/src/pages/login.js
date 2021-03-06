import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import { AuthContext } from '../components/AuthProvider';
import { Alert } from 'reactstrap';
import Nav from '../components/Nav';

const Login = () => {

  const [email, setEmail] = useState("");
  const [danger, setDanger] = useState(false);
  const [password, setPassword] = useState("");
  const history = useHistory();
  const auth = useContext(AuthContext);

  const handleSubmit = (e) => {
    //this stops the refresh
    e.preventDefault();

    axios
    .post('/api/login', { email, password })
    .then(res => {
      auth.setUser(res.data);
      const state = { msg: 'Welcome!' };
      if(res.data.role === 'student') {
        history.replace('/studenthomepage', state)
      } else {
        history.replace('/authorhomepage', state)
      }
    })
    .catch(error => {
      console.log(error);
      setDanger(true);
    })
  }
  return (

    <>
    <Nav />
    <div className="FormCenter">
      <form onSubmit={handleSubmit} className="FormFields">
        {danger &&
          <Alert color="danger" >
            Your username or password is not correct!
          </Alert>
        }
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className="FormField">
          <button className="FormField__Button mr-20">Login</button><Link to="/register" className="FormField__Link">Create an account</Link>
        </div>
      </form>
    </div>
    </>
  );
}
export default Login;
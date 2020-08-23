import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import { AuthContext } from '../components/AuthProvider';
import { Alert } from 'reactstrap';



const Login = () => {

  const [email, setEmail] = useState("");
  const [danger, setDanger] = useState(false);

  const [password, setPassword] = useState("");
  const history = useHistory();
  const auth = useContext(AuthContext);


  const handleChange = (name) => (e) => {
    console.log("value1:", e);
    const target = e.target;

    console.log("target", target);
    const value = target.value;

    console.log("value", value);
    // setState({
    //   [name]: value
    // });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post('/api/login', { email, password })
    .then(res => {
      console.log("1", res.data);
     auth.setUser(res.data);
     const state = { msg: 'Welcome!' };
    //  <Redirect to='/studenthomepage' />


      if(res.data.role === 'student') {
        history.replace('/studenthomepage', state)
      } else {
        history.replace('/authorhomepage', state)
      }
    
    // console.log('The form was submitted with the following data:');
    // console.log(`email: ${JSON.stringify(email)}`);
    // console.log(`password: ${JSON.stringify(password)}`);
    })
    .catch(error => {
      console.log(error);
      setDanger(true);

    })
  }

    return (
      <div className="FormCenter">
        {danger &&
        <Alert color="danger">
          Your username or password is not correct!
        </Alert>
      }
        <form onSubmit={handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Login</button> <Link to="/register" className="FormField__Link">Create an account</Link>
          </div>
        </form>
      </div>
    );
}
export default Login;
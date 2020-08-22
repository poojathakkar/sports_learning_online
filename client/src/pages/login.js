import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

  const [email, setEmail] = useState("");
   
  const [password, setPassword] = useState("");

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
    console.log('The form was submitted with the following data:');
    console.log(`email: ${JSON.stringify(email)}`);
    console.log(`password: ${JSON.stringify(password)}`);

  }

    return (
      <div className="FormCenter">
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
            <button className="FormField__Button mr-20">Login</button> <Link to="/" className="FormField__Link">Create an account</Link>
          </div>
        </form>
      </div>
    );
}
export default Login;
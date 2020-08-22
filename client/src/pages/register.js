import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  // constructor() {
  //     super();
  //     state = {
  //         first_name: '',
  //         last_name: '',
  //         email: '',
  //         password: '',
  //         role: 'student',
  //         hasAgreed: false
  //     };
  //     handleChange = handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  // }

  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'student',
  })

  const handleChange = (name) => (e) => {
    const target = e.target;
    let value = ""

    if (name === 'role') {
      value = target.checked ? "author" : "student";
      console.log("value1", value);
    } else {
      value = target.value
      console.log("value2", value);
    }


    setState({
      ...state,
      [name]: value
    });
    // let value = target.type === 'checkbox' ? target.checked : target.value;
    // let name = target.name;
    // let role = target.role;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('The form was submitted with the following data:');
    console.log(`state: ${JSON.stringify(state)}`);

    axios.post(`/users`, {first_name: state.first_name, last_name: state.last_name, email: state.email, password: state.password, role: state.role})
      .then(({ data }) => {
        console.log(`res: ${data}`)
      })
      .catch((err) => {
        console.log(`err: ${err}`)
      })
  }

  return (
    <div className="FormCenter">
      <form onSubmit={handleSubmit} className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" className="FormField__Input" placeholder="Enter your first name" name="first_name" value={state.first_name} onChange={handleChange('first_name')} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" className="FormField__Input" placeholder="Enter your last name" name="last_name" value={state.last_name} onChange={handleChange('last_name')} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={state.email} onChange={handleChange('email')} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={state.password} onChange={handleChange('password')} />
        </div>
        <div className="FormField">
          <label className="FormField__CheckboxLabel">
            <input className="FormField__Checkbox" type="checkbox" name="role" value={state.role} onChange={handleChange('role')} /> I am an <b>Author</b>
          </label>
        </div>
        <div className="FormField">
          <button className="FormField__Button mr-20">Register</button> <Link to="/login" className="FormField__Link">I'm already member</Link>
        </div>
      </form>
    </div>
  );

}
export default Register
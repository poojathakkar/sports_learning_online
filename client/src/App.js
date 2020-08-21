import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
//import useApplicationData from './hooks/useApplicationData';
import Login from './pages/login';
import Register from './pages/register';

import './App.css';

 // const {state, setState}  = useApplicationData();
//const userList = state.users.map(user => <li>{user.name} {user.email}</li>)

class App extends Component {
  render() {
return (
  <Router>
    <div className="App">
      <div className="App__Aside"> 
        <img src="https://trello-attachments.s3.amazonaws.com/5f3d54fdc25471825210d34b/5f3d814594959d53f84e4b59/238e3e444b2edffeb4e52a6f4b0bf2e7/SPORTS_LEARNING_LOGO.png"/>
      </div>
      <div className="App__Form">
        <div className="PageSwitcher">
            <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Register</NavLink>
          </div>
          <div className="FormTitle">
              <NavLink to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Register</NavLink>
          </div>
          <Route exact path="/" component={Register}>
          </Route>
          <Route path="/login" component={Login}>
          </Route>
      </div>
    </div>
  </Router>
);  

}
}

export default App;



// return (
  //   <>
  //   <h1>Users</h1>

  //   <ul>
  //     {userList}
  //   </ul>

  //   </>
  //   );


import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
//import useApplicationData from './hooks/useApplicationData';
import Login from './pages/login';
import Register from './pages/register';
import Header from './components/Header'
import './App.css';
import Nav from './components/Nav';
import Studenthomepage from './pages/studenthomepage';
import AuthProvider from './components/AuthProvider';
import Checkout from './components/Checkout';


// const {state, setState}  = useApplicationData();
//const userList = state.users.map(user => <li>{user.name} {user.email}</li>)

function App() {

    return (
      <>
    <AuthProvider>

    
      <Router>
        <>
        <Nav />
     
      
        <div className='app'>
        <Switch>
        
            <Route path='/register'>
              <Register />
            </Route>
          
            <Route path='/login' >
              <Login />
            </Route>

            <Route path='/checkout' >
              <Header />
              <Checkout />
            </Route>

            <Route path='/profile/edit' >
              <Header />
            </Route>

       
            <Route path='/studenthomepage'>
              <>
              <Header />
              <Studenthomepage />
              </>
            </Route>

        </Switch>
        </div>
       
        </>
      </Router>
      </AuthProvider>
      </>

    
      
    );

  
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


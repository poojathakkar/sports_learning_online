import React, {useContext, useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
import Login from './pages/login';
import Register from './pages/register';
import Header from './components/Header'
import './App.css';
import Nav from './components/Nav';
import Studenthomepage from './pages/studenthomepage';
import AuthProvider from './components/AuthProvider';
import Checkout from './components/Checkout';
import { AuthContext } from './components/AuthProvider';
import Profile from './components/Profile';
import Result from './pages/result';
//import SearchBar from './components/SearchBar';

function App() {

  const {user, setUser} = useContext(AuthContext);
  const {state, course, setCourse, basket, setBasket} = useApplicationData(user);
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <>
      <Router>
        <>
          {!user && ( <Nav /> )}
          <div className='app'>
            <Switch>
              <Route path='/' exact>
                {user ? (
                  <Redirect to='/studenthomepage' />
                ) : (
                  <Redirect to='/login' />
                )}
              </Route>

              <Route path='/register'>
                <Register />
              </Route>
          
              <Route path='/login' >
                <Login user={user} setUser={setUser}/>
              </Route>

              <Route path='/checkout' >
                <Header basket={basket} onSearchTermUpdate={setSearchTerm}/>
                <Checkout course={course} basket={basket} setCourse={setCourse} setBasket={setBasket} />
              </Route>

              <Route path='/result' render={({history}) =>
                <>
                  <Header user={user} setUser={setUser} course={course} setCourse={setCourse} onSearchTermUpdate={setSearchTerm}/>
                  <Result course={course} setCourse={setCourse} history={history} searchTerm={searchTerm}/>
                </>
              }/>

              <Route path='/editProfile' render={({history}) =>
                <>
                  <Header user={user} setUser={setUser} onSearchTermUpdate={setSearchTerm}/>
                  <Profile user={user} setUser={setUser} history={history} />
                </>                         
              }/>
  
              <Route path='/studenthomepage'>
                <>
                  <Header basket={basket} onSearchTermUpdate={setSearchTerm}/>
                  <Studenthomepage course={course} basket={basket} setBasket={setBasket} user={user} />
                </>
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    </>
  );
}

export default App;
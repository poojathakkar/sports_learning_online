import React, {useContext} from 'react';
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

function App() {

  const {user, setUser} = useContext(AuthContext);
  const {state, course, setCourse, basket, setBasket} = useApplicationData(user);

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
                <Header basket={basket} />
                <Checkout course={course} basket={basket} setCourse={setCourse} setBasket={setBasket} />
              </Route>

              <Route path='/editProfile' render={({history}) =>
                <>
                  <Header user={user} setUser={setUser} />
                  <Profile user={user} setUser={setUser} history={history} />
                </>                         
              }/>
  
              <Route path='/studenthomepage'>
                <>
                  <Header basket={basket} />
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
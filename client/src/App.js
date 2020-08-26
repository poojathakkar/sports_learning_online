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

function App() {

  const {user, setUser} = useContext(AuthContext);
  //console.log("user from app", user);
  const {state, course, setCourse, basket, setBasket} = useApplicationData(user);

   console.log("Courses", course);
   console.log("Baskets", basket);
   console.log("BAsket Length", basket.length);
   // console.log("From appjs",user);
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

            <Route path='/profile/edit' >
              <Header />
            </Route>

       
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
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
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

  const {state, course, setCourse, basket, setBasket} = useApplicationData();

   console.log("Courses", course);
   console.log("Baskets", basket);
  console.log("BAsket Length", basket.length);

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
              <Header basket={basket} />
              <Checkout course={course} basket={basket} setCourse={setCourse} setBasket={setBasket} />
            </Route>

            <Route path='/profile/edit' >
              <Header />
            </Route>

       
            <Route path='/studenthomepage'>
              <>
              <Header basket={basket} />
              <Studenthomepage course={course} basket={basket} setBasket={setBasket}  />

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


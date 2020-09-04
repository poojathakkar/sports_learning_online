import React, {useContext, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import useApplicationData from './hooks/useApplicationData';
import Login from './pages/login';
import Register from './pages/register';
import Header from './components/Header'
import Nav from './components/Nav';
import Studenthomepage from './pages/studenthomepage';
import Authorhomepage from './pages/authorhomepage';
import Checkout from './components/Checkout';
import { AuthContext } from './components/AuthProvider';
import Profile from './components/Profile';
import Result from './pages/result';
import CoursesList from './pages/CoursesList';
import AuthorHeader from './components/AuthorHeader';
import NewCourse from './pages/NewCourse';
import AuthorCourseLists from './pages/AuthorCourseLists';
import EditCourse from './components/EditCourse';
import Report from './components/Report';
import Footer from './components/Footer';

function App() {

  const {user, setUser} = useContext(AuthContext);
  const {course, setCourse, basket, setBasket} = useApplicationData(user);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
   setSearchTerm(searchTerm)
  },[searchTerm])

  return (
    <>
      <Router>
        <>
          {!user && 
            <Redirect to='/register' />
           }
          <div className='app'>
            <Switch>
              <Route path='/' exact>
               
                {user && user.role === 'student' && (
                  <Redirect to='/studenthomepage' />
                )}
                {user && user.role === 'author' && (
                  <Redirect to='/authorhomepage' />
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
                  <Header user={user} setUser={setUser} course={course} setCourse={setCourse} onSearchTermUpdate={setSearchTerm} searchTerm={searchTerm} basket={basket} setBasket={setBasket} />
                  <Result course={course} setCourse={setCourse} history={history} searchTerm={searchTerm} basket={basket} setBasket={setBasket} onSearchTermUpdate={setSearchTerm} />
                </>
              }/>

              <Route path='/editProfile' render={({history}) =>
                <>
                  <Header user={user} setUser={setUser} onSearchTermUpdate={setSearchTerm} basket={basket} />
                  <Profile user={user} setUser={setUser} history={history} />
                </>                         
              }/>

              <Route path='/editCourse' render={({history}) =>
                <>
                  <AuthorHeader user={user} setUser={setUser} />
                  <EditCourse user={user} setUser={setUser}  history={history} />
                </>                         
              }/>   

              <Route path='/newCourse' render={({history}) => 
                <>
                  <AuthorHeader user={user} setUser={setUser} />
                  <NewCourse user={user} setUser={setUser} history={history} />
                </>
              }
              />
               
              <Route path='/studenthomepage'>
                <>
                  <Header basket={basket} onSearchTermUpdate={setSearchTerm}/>
                  <Studenthomepage course={course} basket={basket} setBasket={setBasket} user={user} />
                  <Footer />
                </>
              </Route>

              <Route path='/courses'>
                <Header onSearchTermUpdate={setSearchTerm} user={user} setUser={setUser} basket={basket} />
                <CoursesList course={course} setCourse={setCourse} user={user} />
              </Route>

              <Route path='/authorcourses' render={({history}) => 
              <>
                <AuthorHeader user={user} setUser={setUser} />
                <AuthorCourseLists user={user} course={course} setCourse={setCourse} history={history} />
              </>
              }
              />

              <Route path='/authorhomepage'>
                {user && user.role === "author" ? <>
                <AuthorHeader />
                <Authorhomepage user={user}/>
                </> : <Redirect to='/' />}
                <Footer />
              </Route>   

              <Route path='/revenueReport'>
                <AuthorHeader />
                <Report />
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    </>
  );
}

export default App;
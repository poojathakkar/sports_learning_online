import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
//import { AuthContext } from '../components/AuthProvider';


const useApplicationData = (currentUser) => {

  //const auth = useContext(AuthContext);

  const [state, setState] = useState();
  const [course, setCourse] = useState([]);
  const [basket, setBasket] = useState([]);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    axios
    .get('/api/coursesList')
    .then(res => {
     setCourse(res.data);
    })

      axios
     .get('/api/courseForUser')
  
     .then(res => {
      //console.log("courseForUser", res.data);

     setBasket(res.data);
    })

  }, [currentUser])

  return {
    state, 
    course,
    basket,
    setBasket,
    count,
    setCount,
    user, 
    setUser
  }

}

export default useApplicationData;
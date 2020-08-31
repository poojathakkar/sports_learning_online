import {useState, useEffect} from 'react';
import axios from 'axios';

const useApplicationData = (currentUser) => {

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
     setBasket(res.data);
    })

  }, [currentUser])

  return {
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
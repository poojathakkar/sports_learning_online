import {useState, useEffect} from 'react';
import axios from 'axios';

const useApplicationData = () => {

  const [state, setState] = useState();
  const [course, setCourse] = useState([]);
  const [basket, setBasket] = useState([]);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});



  useEffect(() => {

    axios
    .get('/api/coursesList')
    
    .then(res => {
      console.log("Data", res.data);

     setCourse(res.data);

   // console.log("res", res.data[0]);
    })


  }, [])

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
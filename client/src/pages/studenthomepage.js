import React, {useContext} from 'react'
import './studenthomepage.css';
import Course from '../components/Course';
import axios from 'axios';
import { AuthContext } from '../components/AuthProvider';

function Studenthomepage(props) {

  const auth = useContext(AuthContext);
  
  function addToBasket(obj) {
    const user_id = Number(auth.user.id);
    const course_id = Number(obj.id);
    
    axios.post('api/addToCart', { user_id, course_id })
    .then(res => {
    props.setBasket(prev => [...prev, obj])
    })
    .catch(error => {
     // console.log(error);
      //setDanger(true);
    })

  }
  

  return (
    <div className="studenthome">
      <img className="home__image" src="https://sportslearning.online/uploads/system/home-banner.jpg" alt="" />
      <div className="home__row">
        {props.course.map(c => <Course key={c.id} {...c} onClick={() => addToBasket(c)}/>)}
      </div>
    </div>
  )
}

export default Studenthomepage

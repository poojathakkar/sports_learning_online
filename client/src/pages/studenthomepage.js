import React from 'react'
import './studenthomepage.css';
import Course from '../components/Course';
import axios from 'axios';

function Studenthomepage(props) {

  function addToBasket(obj) {
    const course_id = obj.id;
    
    axios.post('/api/addToCart', { course_id })
    .then(res => {
    props.setBasket(prev => [...prev, obj])
    })
    .catch(error => {
     console.log(error);
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

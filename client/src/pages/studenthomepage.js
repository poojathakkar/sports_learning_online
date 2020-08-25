import React from 'react'
import './studenthomepage.css';
import Course from '../components/Course';
import axios from 'axios';
// import useApplicationData from '../hooks/useApplicationData';

function Studenthomepage(props) {

  // const [course, setCourse] = useState();
  function addToBasket(obj) {
    props.setBasket(prev => [...prev, obj])
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

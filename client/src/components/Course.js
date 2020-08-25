import React, { useContext } from 'react';
import './Course.css';

//import users from '../../../backend/routes/users';

// import useApplicationData from '../hooks/useApplicationData';

function Course(props) {

  

  console.log("courseprops:", props);
  

  return (
    <div className="course">

      <div className="course__info">
        <p>{props.title}</p>
        <p className="course__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
      </div>
        <img className="course__img" src={props.thumbnail} alt="" />
        <button onClick={props.onClick}>Add to cart</button>
    </div>
  )
}

export default Course

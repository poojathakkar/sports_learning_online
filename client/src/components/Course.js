import React from 'react';
import './Course.css';

function Course(props) {

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
        <button className="course__Button mr-20" onClick={props.onClick} >Add to cart</button>
    </div>
  )
}

export default Course

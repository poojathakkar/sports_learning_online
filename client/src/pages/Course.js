import React from 'react';
import './Course.css';

function Course({id, title, description, price, thumbnail, content, user_id}) {
  return (
    <div className="course">

      <div className="course__info">
        <p>{title}</p>
        <p className="course__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
        <img className="course__img" src={thumbnail} alt="" />
        <button>Add to cart</button>
     

    
    </div>
  )
}

export default Course

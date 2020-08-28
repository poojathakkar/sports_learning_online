import React, { useState } from 'react'
import './CourseDetails.css';
import { FaStar } from 'react-icons/fa';

function CourseDetails(props) {
  const [rating, setRating] = useState(null);
  return (
    <div className="coursedetails">
      <div className="course__left">
        <img className="course__left--img" src={props.thumbnail} alt="" />
      </div>
      <div className="course__right">
        <div className="course__right--title">
          <p>{props.title}</p>

          <div className="course__right--rating">

            {[...Array(5)].map((star,i) => {
              const ratingValue = i + 1;
              return (
                <label>
                  <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                  <FaStar className="course__right--star" size={15} color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} />
                
                </label>
              )
            })}
          </div>

      </div>
      <div className="course__right--price">
          <small>$</small>
          <strong>{props.price}</strong>
        </div>
        {/* <div className="course__author">
          <p>{props.user_id}</p>
        </div> */}
        <div className="course__right--content">
          <p>{props.content}</p>
        </div> 
      </div>
    
    
    </div> 
  )
}

export default CourseDetails

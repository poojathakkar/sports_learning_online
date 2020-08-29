import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './AuthorCoursesManage.css';
import { FaStar } from 'react-icons/fa';


function AuthorCoursesManage(props) {
  const [rating, setRating] = useState(null);
  return (
    <div className="coursemanagedetails">
      <div className="coursemanage__left">
        <img className="coursemanage__left--img" src={props.thumbnail} alt="" />
      </div>
      <div className="coursemanage__right">
        <div className="coursemanage__right--title">
          <p>{props.title}</p>

          <div className="coursemanage__right--rating">

            {[...Array(5)].map((star,i) => {
              const ratingValue = i + 1;
              return (
                <label>
                  <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                  <FaStar className="coursemanage__right--star" size={15} color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} />
                
                </label>
              )
            })}
          </div>

      </div>
      <div className="coursemanage__right--price">
          <small>$</small>
          <strong>{props.price}</strong>
        </div>
        {/* <div className="course__author">
          <p>{props.user_id}</p>
        </div> */}
        <div className="coursemanage__right--content">
          <p>{props.content}</p>
        </div> 

        <div className="coursemanage__button">
          <Link to='/editCourse' className="coursemanage__link--edit">
            <button className="coursemanagenav__Button mr-20" >Update</button>
          </Link>
          <button className="coursemanagenav__Button mr-20" >Delete</button>

        </div>
      </div>
    
    
    </div> 
  )
}

export default AuthorCoursesManage

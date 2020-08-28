import React from 'react'
import './AuthorCourses.css';

function AuthorCourses(props) {
  return (
    <div className="authorcourse">
      <div className="authorcourse__info">
        <p>{props.title}</p>
        <p className="authorcourse__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
      </div>
      <img className="authorcourse__img" src={props.thumbnail} alt="" />
     
    </div>
  )
}

export default AuthorCourses

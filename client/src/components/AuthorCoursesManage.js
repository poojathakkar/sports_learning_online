import React from 'react';
import { Link } from 'react-router-dom';
import './AuthorCoursesManage.css';
import axios from 'axios';

//manage(edit/delete) course ; calling this component from AuthorCourseLists
function AuthorCoursesManage(props) {

  function deleteCourse() {
    const  course_id  = props.id;
    axios.delete(`/api/courseDelete/${course_id}`)
    .then(res => {
      props.history.push('/authorhomepage');
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="coursemanagedetails">
      <div className="coursemanage__left">
        <img className="coursemanage__left--img" src={props.thumbnail} alt="" />
      </div>
      <div className="coursemanage__right">
        <div className="coursemanage__right--title">
          <p>{props.title}</p>
        </div>
        <div className="coursemanage__right--price">
          <small>$</small>
          <strong>{props.price}</strong>
        </div> 
        <div className="coursemanage__right--content" dangerouslySetInnerHTML={{__html:props.content}}>
          
          {/* <p>{props.content}</p> */}
        </div> 
        <div className="coursemanage__button">
          <Link to ={{
            pathname: '/editCourse' ,
            state: {course : props.course_id}  }} >
            <button className="coursemanagenav__Button mr-20" >Edit</button>
          </Link>
          <button className="coursemanagenav__Button mr-20" onClick={deleteCourse}>Delete</button>
        </div>   
      </div>   
    </div> 
  )
}

export default AuthorCoursesManage

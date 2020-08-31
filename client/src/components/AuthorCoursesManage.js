import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AuthorCoursesManage.css';
import axios from 'axios';
import AuthorCourses from './AuthorCourses';
import EditCourse from './EditCourse';


function AuthorCoursesManage(props) {

 //const [course, setCourse] = useState();
//  const course_id = props.id;
const course_id = props.course_id;
//const [course, setCourse] = useState();


console.log("#### Course ID: " + course_id);

 function editCourse(course_id) {

   console.log("inside edit course")
   console.log("inside edit course, course_id", course_id)

    axios.get('/api/courseEdit/' + course_id)
    .then(res => {
      props.setCourse(res.data);
      console.log("inside axios", res.data)
    })
    .catch(err => {
      console.log(err)
    })


 
 }


 

  // function deleteCourse(id) {
  //   console.log("From delete", id)
  //   axios.delete('/api/courseDelete/{props.id}')
  //   .then(res => {
  //     props.setCourse();
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })

  // }



    

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
        
      <div className="coursemanage__right--content">
        <p>{props.content}</p>
      </div> 

      <div className="coursemanage__button">
        <Link to='/editCourse' className="coursemanage__link--edit">
          <button className="coursemanagenav__Button mr-20" onClick={() => editCourse(props.course_id) }>Edit</button>
        </Link>
      </div>   
    </div>   
    </div> 
  )
}

export default AuthorCoursesManage

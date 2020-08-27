import React, { useState, useEffect } from 'react';
import './result.css';
import axios from 'axios';
import Course from '../components/Course';

function Result(props) {

const [courses, setCourses] = useState([]);

  useEffect(() => {
  axios.get(`/api/searchCourse/${props.searchTerm}`)
    .then(response => {
      setCourses(response.data);
      console.log(response.data);
    })
    .catch(err => console.log(err.mesage));
  },[]);

  return (
    <div className="course__search">
       {courses.map(c => <Course key={c.id} {...c} />)}
    </div>
  )
}
export default Result
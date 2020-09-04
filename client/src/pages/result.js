import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Course from '../components/Course';

function Result(props) {

const [courses, setCourses] = useState([]);

  useEffect(() => {
  axios.get(`/api/searchCourse/${props.searchTerm}`)
    .then(response => {
      setCourses(response.data);
      //props.setSearchTerm(null);
      console.log(response.data);
    })
    .catch(err => console.log(err.mesage));
  },[]);

  function addToBasket(obj) {
    const course_id = obj.id;
    
    axios.post('/api/addToCart', { course_id })
    .then(res => {
    props.setBasket(prev => [...prev, obj])
    })
    .catch(error => {
     console.log(error);
    })
  }

  return (
    <div className="course__search">
       {courses.map(c => <Course key={c.id} {...c} onClick={() => addToBasket(c)} />)}
    </div>
  )
}
export default Result
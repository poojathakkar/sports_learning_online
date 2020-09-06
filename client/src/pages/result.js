import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Course from '../components/Course';

function Result(props) {

const [courses, setCourses] = useState([]);

const styles = {
  display: "flex",
  margin: "50 auto",
};

console.log("props", props);

  useEffect(() => {
  axios.get(`/api/searchCourse/${props.searchTerm}`)
    .then(response => {
      setCourses(response.data);
      console.log("courses",courses);
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
    <div className="search">
      {courses.length === 0 ? (
        <div style={styles}>
          <h2>Sorry! No result found.</h2>  
        </div>
      ) : (
        <div className="course__search">
          {courses.map(c => <Course key={c.id} {...c} onClick={() => addToBasket(c)} />)}
        </div>
      )}
    </div>
  )
}
export default Result

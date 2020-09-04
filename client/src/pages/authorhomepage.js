import React, { useState, useEffect } from 'react';
import './authorhomepage.css';
import axios from 'axios';
import AuthorCourses from '../components/AuthorCourses';

function Authorhomepage() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios.get('/api/authorCourse')
        .then(res => {
          setCourse(res.data);
        })
        .catch(err => console.log(err.message));
  }, []);

  return (
    <div className="authorhome">
      <img className="authorhome__img" src="https://dev.sportslearning.online/uploads/system/banner-home-2.jpg" alt=""/>
      <div className="authorhome__course">
        {course.map(c => <AuthorCourses key={c.id} {...c} />
        )}
      </div>
    </div>
  )
}

export default Authorhomepage

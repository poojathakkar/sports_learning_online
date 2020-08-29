import React, { useState, useEffect } from 'react';
import './AuthorCourseLists.css';
import axios from 'axios';
import AuthorCoursesManage from '../components/AuthorCoursesManage';

function AuthorCourseLists() {
  const [course, setCourse] = useState([]);
  console.log("course", course)
  useEffect(() => {
    axios.get('/api/authorCourse')
        .then(res => {
          setCourse(res.data);
         // console.log("Check", res.data)

        })
        .catch(err => console.log(err.message));
  }, []);

  return (
    <div className="authorcourse">
      {course.map(c => <AuthorCoursesManage key={c.id} {...c} />
      )}
    </div>
  )
}

export default AuthorCourseLists

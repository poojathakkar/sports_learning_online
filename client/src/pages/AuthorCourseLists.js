import React, { useState, useEffect } from 'react';
import './AuthorCourseLists.css';
import axios from 'axios';
import AuthorCoursesManage from '../components/AuthorCoursesManage';

function AuthorCourseLists(props) {
  const [course, setCourse] = useState([]);
  console.log("course", course)
  useEffect(() => {
    axios.get('/api/authorCourse')
        .then(res => {
          setCourse(res.data);
        })
        .catch(err => console.log(err.message));
  }, []);

  return (
    <div className="authorcourselist">
      {course.map(c => <AuthorCoursesManage setCourse={setCourse} key={c.id} course_id={c.id} {...c} courseObj={c} history={props.history} />
      )}
    </div>
  )
}

export default AuthorCourseLists

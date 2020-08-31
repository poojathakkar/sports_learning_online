import React from 'react';
import './CoursesList.css';
import CourseDetails from '../components/CourseDetails';

function CoursesList(props) {
  return (
    <div className="courselist">
        {props.course.map(c => <CourseDetails key={c.id} {...c} />)}
    </div>
  )
}

export default CoursesList

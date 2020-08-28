import React, { useEffect, useState } from 'react';
import './CoursesList.css';
import CourseDetails from '../components/CourseDetails';


function CoursesList(props) {

  return (
   <div className="courselist">
      {/* <div className="home__row"> */}
        {props.course.map(c => <CourseDetails key={c.id} {...c} />)}
      {/* </div> */}
    </div>
  )
}

export default CoursesList

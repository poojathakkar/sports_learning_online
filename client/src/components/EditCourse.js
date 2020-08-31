import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthProvider';
import './EditCourse.css';
import AuthorCourseManage from './AuthorCoursesManage';


function EditCourse(props) {
  console.log("Props from editcourse", props);
  const course_id = props.id;
  const handleChange = (name, e) => {
    const target = e.target;
    let value = target.value;
    console.log('target', target);
    props.setCourse({
      ...props.course,
      [name]: value
    });
    console.log("Value", value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    axios.post('/api/courseUpdate', {title: props.course.title, description: props.course.description, price: props.course.price, thumbnail: props.course.thumbnail, content: props.course.content, tags: props.course.tags})
        .then(res => {
          props.history.push('/authorhomepage')
        })
        .catch(err => {
          console.log(err)
        })
  }


  return (
    <div className="updatecourse">
    <form onSubmit={handleSubmit} className="updatecourse__form">

      <div className="updatecourse__formfield">
        <label className="updatecourse__label" htmlFor="updatecourse_title">*Course Title 
        </label>
        <input type="text" id="updatecourse__input" placeholder="Title for course"  className="updatecourse__input" name='updatecourse_title' value={props.course.title} onChange={(e) => handleChange('title', e)} required />
      </div>

      <div className="updatecourse__formfield">
        <label className="updatecourse__label" htmlFor="updatecourse_description">*Course Description 
        </label>
        <input type="text" id="updatecourse__input" placeholder="Description for course"  className="updatecourse__input" name='updatecourse_description' value={props.course.description} onChange={(e) => handleChange('description', e)} required />
      </div>

      <div className="updatecourse__formfield">
        <label className="updatecourse__label" htmlFor="updatecourse_price">*Course Price 
        </label>
        <input type="text" id="updatecourse__input" placeholder="Price for course"  className="updatecourse__input" name='updatecourse_price' value={props.course.price} onChange={(e) => handleChange('price', e)} required />
      </div>

      <div className="updatecourse__formfield">
        <label className="updatecourse__label" htmlFor="updatecourse_thumbnail">*Thumbnail 
        </label>
        <input type="text" id="updatecourse__input" placeholder="Image for course"  className="updatecourse__input" name='updatecourse_thumbnail' value={props.course.thumbnail} onChange={(e) => handleChange('thumbnail', e)} required />
      </div>


      <div className="updatecourse__formfield">
        <label className="updatecourse__label" htmlFor="updatecourse_content">*Content 
        </label>
        <input type="text" id="updatecourse__input" placeholder="Content for course"  className="updatecourse__input--content" name='updatecourse_content' value={props.course.content} onChange={(e) => handleChange('content', e)} required />
      </div>

      <div className="updatecourse__formfield">
        <label className="updatecourse__label" htmlFor="updatecourse_description">*Tags 
        </label>
        <input type="text" id="updatecourse__input" placeholder="Tags for course"  className="updatecourse__input--content" name='updatecourse_tags' value={props.course.tags} onChange={(e) => handleChange('tags', e)} required />
      </div>

      <div className="updatecourse__formfield">
        <button className="updatecourse__button mr-20">Update</button>
      </div>



    </form>

    
  </div>
  )
}

export default EditCourse

import React, { useState } from 'react'
import './NewCourse.css';
import axios from 'axios';

function NewCourse(props) {

  const [course, setCourse] = useState('');
  const handleChange = (name, e) => {
    const target = e.target;
    let value = target.value;
    console.log('target', target);
    setCourse({
      ...course,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/addCourse', {title: course.title, description: course.description, price: course.price, thumbnail: course.thumbnail, content: course.content, tags: course.tags })
        .then(res => {
          props.history.push('/authorhomepage')
        })
        .catch(err => {
          console.log(err)
        })
  }
  return (
    <div className="newcourse">
      <form onSubmit={handleSubmit} className="newcourse__form">
        <div className="newcourse__formfield">
          <label className="newcourse__label" htmlFor="course_title">*Course Title 
          </label>
          <input type="text" id="course__input" placeholder="Title for course"  className="course__input" name='course_title' value={course.title} onChange={(e) => handleChange('title', e)} required />
        </div>
        <div className="newcourse__formfield">
          <label className="newcourse__label" htmlFor="course_description">*Course Description 
          </label>
          <input type="text" id="course__input" placeholder="Description for course"  className="course__input" name='course_description' value={course.description} onChange={(e) => handleChange('description', e)} required />
        </div>
        <div className="newcourse__formfield">
          <label className="newcourse__label" htmlFor="course_description">*Course Price 
          </label>
          <input type="text" id="course__input" placeholder="Price for course"  className="course__input" name='course_price' value={course.price} onChange={(e) => handleChange('price', e)} required />
        </div>
        <div className="newcourse__formfield">
          <label className="newcourse__label" htmlFor="course_description">*Thumbnail 
          </label>
          <input type="text" id="course__input" placeholder="Image for course"  className="course__input" name='course_thumbnail' value={course.thumbnail} onChange={(e) => handleChange('thumbnail', e)} required />
        </div>
        <div className="newcourse__formfield">
          <label className="newcourse__label" htmlFor="course_description">*Content 
          </label>
          <input type="text" id="course__input" placeholder="Content for course"  className="course__input--content" name='course_content' value={course.content} onChange={(e) => handleChange('content', e)} required />
        </div>
        <div className="newcourse__formfield">
          <label className="newcourse__label" htmlFor="course_description">*Tags
          </label>
          <input type="text" id="course__input" placeholder="Tags for course"  className="course__input--content" name='course_tags' value={course.tags} onChange={(e) => handleChange('tags', e)} required />
        </div>
        <div className="newcourse__formfield">
          <button className="newcourse__button mr-20">Save</button>
        </div>
      </form>
    </div>
  )
}
export default NewCourse
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../components/AuthProvider';
import './UpdateCourse.css';


function UpdateCourse(props) {
  const { user, setUser } = useContext(AuthContext);
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

    axios.post('/api/editCourse', {title: course.title, description: course.description, price: course.price, thumbnail: course.thumbnail, content: course.content})
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
        <input type="text" id="updatecourse__input" placeholder="Title for course"  className="updatecourse__input" name='updatecourse_title' value={course.title} onChange={(e) => handleChange('title', e)} required />
      </div>

      <div className="updatecourse__formfield">
        <label className="updatecourse__label" htmlFor="updatecourse_description">*Course Description 
        </label>
        <input type="text" id="updatecourse__input" placeholder="Description for course"  className="updatecourse__input" name='updatecourse_description' value={course.description} onChange={(e) => handleChange('description', e)} required />
      </div>

      <div className="updatecourse__formfield">
        <label className="updatecourse__label" htmlFor="updatecourse_description">*Course Price 
        </label>
        <input type="text" id="updatecourse__input" placeholder="Price for course"  className="updatecourse__input" name='updatecourse_price' value={course.price} onChange={(e) => handleChange('price', e)} required />
      </div>

      <div className="updatenewcourse__formfield">
        <label className="updatenewcourse__label" htmlFor="updatecourse_description">*Thumbnail 
        </label>
        <input type="text" id="updatecourse__input" placeholder="Image for course"  className="updatecourse__input" name='updatecourse_thumbnail' value={course.thumbnail} onChange={(e) => handleChange('thumbnail', e)} required />
      </div>


      <div className="updatenewcourse__formfield">
        <label className="updatenewcourse__label" htmlFor="updatecourse_description">*Content 
        </label>
        <input type="text" id="updatecourse__input" placeholder="Content for course"  className="updatecourse__input--content" name='updatecourse_content' value={course.content} onChange={(e) => handleChange('content', e)} required />
      </div>

      <div className="updatecourse__formfield">
        <button className="updatecourse__button mr-20">Update</button>
      </div>



    </form>

    
  </div>
  )
}

export default UpdateCourse

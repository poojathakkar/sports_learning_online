import React from 'react'
import './studenthomepage.css';
import Course from '../components/Course';

function Studenthomepage() {
  return (
    <div className="studenthome">
      <img className="home__image" src="https://sportslearning.online/uploads/system/home-banner.jpg" alt="" />
      <div className="home__row">
        <Course id="1"
              title='Business Development'
              description='tasks and processes to develop and implement growth opportunities'
              price={140.00}
              thumbnail='https://sportslearning.online/uploads/thumbnails/course_thumbnails/course_thumbnail_default_D2UzsVO1.jpg'
              content='Business development is the creation of long-term value for an organization from customers, markets, and relationships. Business development can be taken to mean any activity by either a small or large organization, non-profit or for-profit enterprise which serves the purpose of ‘developing’ the business in some way.'
              user_id="2"
        />

        <Course id="1"
              title='Business Development'
              description='tasks and processes to develop and implement growth opportunities'
              price={140.00}
              thumbnail='https://sportslearning.online/uploads/thumbnails/course_thumbnails/course_thumbnail_default_D2UzsVO1.jpg'
              content='Business development is the creation of long-term value for an organization from customers, markets, and relationships. Business development can be taken to mean any activity by either a small or large organization, non-profit or for-profit enterprise which serves the purpose of ‘developing’ the business in some way.'
              user_id="2"
        />
      </div>

     
      
    </div>
  )
}

export default Studenthomepage

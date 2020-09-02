const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/', (req, res) => {

    let userId = req.session['user_id'];
    console.log("course_user", userId);
    
    const query = {
      text: `SELECT EXTRACT(month from enroll.date_added), SUM(courses.price)
      FROM courses
      JOIN enroll on courses.id=enroll.course_id
      WHERE courses.user_id = $1
      GROUP BY EXTRACT(month from enroll.date_added)`,
      values: [userId]
    };
    db.query(query)
      .then(result => {
        //console.log("result", result);
        res.json(result)
        })
      .catch(err => console.log(err));
  });
  return router;
};
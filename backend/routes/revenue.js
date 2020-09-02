const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/', (req, res) => {

    let userId = req.session['user_id'];
    console.log("course_user", userId);
    
    const query = {
      text: `SELECT to_char(enroll.date_added, 'MON') AS name , SUM(courses.price) AS value
      FROM courses
      JOIN enroll on courses.id=enroll.course_id
      WHERE courses.user_id = $1
      GROUP BY to_char(enroll.date_added, 'MON')`,
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
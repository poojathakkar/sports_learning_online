const express = require('express');
const router = express.Router();

module.exports = db => {


  router.post('/', (req, res) => {
    const { user_id, course_id } = req.body

    const query = {
      text: 'DELETE FROM enroll WHERE user_id = $1 AND course_id = $2',
      values: [user_id, course_id]
    };
    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  });

  return router;
};
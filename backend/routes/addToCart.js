const express = require('express');
const router = express.Router();


module.exports = db => {

  router.post('/', (req, res) => {

    let userId = req.session['user_id'];
    const { course_id } = req.body;
   
    const query = {
      text: `
      INSERT INTO enroll (user_id, course_id) VALUES ($1, $2) RETURNING *;
    `,
      values: [userId, course_id]
    }
    db.query(query)
      .then(result => res.json(result))
      .catch(err => {
        console.error(err);
        res.status(500).send(err)
      });
  });
  return router;

}
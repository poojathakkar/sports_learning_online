const express = require('express');
const router = express.Router();


module.exports = db => {

  router.post('/', (req, res) => {
    const {user_id, course_id} = req.body;
    console.log(req.body);
    // const checkUser = {
    //   text: `SELECT * FROM users WHERE user_id = $1`,
    //   values: [user_id]
    // }

    const query = {
      text: `
      INSERT INTO enroll (user_id, course_id) VALUES ($1, $2) RETURNING *;
    `,
      values: [user_id, course_id]
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
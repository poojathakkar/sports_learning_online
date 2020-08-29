const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/', (req, res) => {

    const { course_id } = req.body;
  
    const query = {
      text: `SELECT id, title, description, price, thumbnail, content, tags, user_id 
      FROM courses 
      WHERE id=$1`,
      values: [course_id]
    };
    db.query(query)
      .then(result => {
        res.json(result)
        })
      .catch(err => console.log(err));
  });
  return router;
};
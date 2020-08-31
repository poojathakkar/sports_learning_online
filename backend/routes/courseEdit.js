const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/:course_id', (req, res) => {

    const course_id = req.params.course_id;
    console.log("Edit", req.params)
  
    const query = {
      text: `SELECT id, title, description, price, thumbnail, content, tags, user_id 
      FROM courses 
      WHERE id=$1`,
      values: [course_id]
    };

    console.log(query);
    db.query(query)
      .then(result => {
        console.log("results", result)
        res.json(result)
        })
      .catch(err => console.log(err));
  });
  return router;
};
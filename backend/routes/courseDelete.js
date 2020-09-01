const express = require('express');
const router = express.Router();

module.exports = db => {
  router.delete('/:course_id', (req, res) => {
    console.log("Hello")
    // const { course_id } = req.body;
    const { course_id } = req.params;
    console.log("req params")
   // const { course_id } = req.params;


    const query = {
      text: 'DELETE FROM courses WHERE id = $1',
      values: [course_id]
    };
    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  });

  return router;
};
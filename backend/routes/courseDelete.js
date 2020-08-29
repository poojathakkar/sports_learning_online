const express = require('express');
const router = express.Router();

module.exports = db => {

  router.post('/', (req, res) => {
    const { course_id } = req.body

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
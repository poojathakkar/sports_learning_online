const express = require('express');
const { use } = require('../app');
const router = express.Router();

module.exports = db => {


  router.delete('/:course_id', (req, res) => {
    let userId = req.session['user_id'];  
    const { course_id } = req.params;
    
    console.log(req.body);
  
    const query = {
      text: 'DELETE FROM enroll WHERE user_id = $1 AND course_id = $2',
      values: [userId, course_id]
    };
    db.query(query)
      .then(result => res.json(result))
      .catch(err => {console.log(err)
      res.status(500).send(err)
      })
  });

  return router;
};
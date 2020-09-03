const express = require('express');
const router = express.Router();

module.exports = db => {
  router.get('/', (req, res) => {

    let userId = req.session['user_id'];
    const query = {
      text: `SELECT id, title, description, price, thumbnail, content, user_id 
      FROM courses 
      WHERE user_id=$1 `,
      values: [userId]
    };
    db.query(query)
      .then(result => {
        console.log("result", result);
        res.json(result)
        })
      .catch(err => console.log(err));
  });
  return router;
};

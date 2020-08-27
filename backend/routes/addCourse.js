const express = require('express');
const router = express.Router();


module.exports = db => {

  router.post('/', (req, res) => {

    let userId = req.session['user_id'];
    const { title, description, price, thumbnail, content } = req.body;
    console.log(req.body);
   
    const query = {
      text: `
      INSERT INTO courses (title, description, price, thumbnail, content, user_id) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
    `,
      values: [title, description, price, thumbnail, content, userId]
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
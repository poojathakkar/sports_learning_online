const express = require('express');
const router = express.Router();


module.exports = db => {

  router.post('/', (req, res) => {
    
    let userId = req.session['user_id'];
    const { title, description, price, thumbnail, content, tags } = req.body;
    const tagsArr = tags.replace(/ /g, '').split(',');
    
    const query = {
      text: `
      INSERT INTO courses (user_id, title, description, price, thumbnail, content, tags) 
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
    `,
      values: [userId, title, description, price, thumbnail, content, tagsArr]
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
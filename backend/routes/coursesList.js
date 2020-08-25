const express = require('express');
const router = express.Router();
module.exports = db => {
  router.get('/', (req, res) => {
    const { title } = req.body;
    const query = {
      text: "SELECT id, title, description, price, thumbnail, content, user_id FROM courses",
    };
    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  });
  return router;
};
const express = require('express');
const router = express.Router();
module.exports = db => {
  router.get('/:searchTerm', (req, res) => {
    const { title } = req.body;
    const searchTerm = req.params.searchTerm;
    const query = {
      text: "SELECT id, title, description, price, thumbnail, content FROM courses WHERE lower(title) like $1",
      values: [`%${searchTerm}%`]
    };
    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  });
  return router;
};
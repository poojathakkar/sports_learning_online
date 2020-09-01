const express = require('express');
const router = express.Router();

module.exports = db => {
  router.post('/', (req, res) => {
    const { title, description, price, thumbnail, content, tags, course_id } = req.body;
    const tagsArr = tags.toString();

    const query = {
      text: `UPDATE courses SET title=$1, description=$2, price=$3, thumbnail=$4, content=$5, tags=ARRAY[$6]
      WHERE id=$7`,
      values: [title, description, price, thumbnail, content, tagsArr, course_id]
    }
   
    db.query(query)
      .then(result => {
         res.json(result);
      })
      .catch(err => {
        console.error(err);
        res.status(500);
        res.json({ error: "Error while updating profile" })
      });
  });
  return router;
};
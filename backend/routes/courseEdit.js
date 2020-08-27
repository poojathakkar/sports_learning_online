const express = require('express');
const router = express.Router();

module.exports = db => {

  router.post('/', (req, res) => {
    console.log("edit");
    const userId = req.session['user_id'];
    const { title, description, price, thumbnail, content } = req.body;

    const query = {
      text: `UPDATE courses SET title=$1, description=$2, price=$3, thumbnail=$4, content=$5 
      WHERE user_id=$5;`,
      values: [title, description, price, thumbnail, content, userId]
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
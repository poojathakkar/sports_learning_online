const express = require('express');
const router = express.Router();

module.exports = db => {

  //When user clicks update button

  router.post('/', (req, res) => {
    console.log("edit");
    const userId = req.session['user_id'];
    const {first_name, last_name, email, role} = req.body;

    const query = {
      text: 'UPDATE users SET first_name=$1, last_name=$2, email=$3, role=$4 WHERE id=$5;',
      values: [first_name, last_name, email, role, userId]
    };

    db.query(query)
      .then(result => res.json(result)
      )
      .catch(err => {
        console.error(err);
        res.status(500);
        res.json({ error: "Error while updating status" })
      });
  });

  return router;
};
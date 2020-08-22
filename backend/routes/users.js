const express = require('express');
const router = express.Router();

module.exports = (db) => {
  /* GET users listing. */
  router.get('/', (req, res) => {
    
    const query = {
      text: 'SELECT * FROM users;'
    };

    db.query(query)
      .then(result => res.json(result))
      .catch(err => console.log(err));

  });

  router.post('/', (req, res) => {
    console.log("req.body:", req.body);
    // extract the data from req.body
    const {first_name, last_name, email, password, role} = req.body;

    // create an insert query in the db
    const query = {
      text: `INSERT INTO users (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      values: [first_name, last_name, email, password, role]
    };

    db
      .query(query)
      .then(result => res.json(result[0]))
      .catch(err => console.log(err));

    // return the newly created user back


  });

  return router;
};
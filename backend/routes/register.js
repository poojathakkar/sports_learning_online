const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = db => {
  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.send("Entering Register:")
  });
  router.post('/', (req, res) => {
    const {first_name, last_name, email, password, role} = req.body;
    const checkEmail = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email]
    }
    const query = {
      text: `INSERT INTO users (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      values: [first_name, last_name, email, bcrypt.hashSync(password, saltRounds), role]
    };
    db.query(checkEmail)
      .then(checkEmailresult => {
        let existUser = checkEmailresult
        console.log(checkEmailresult)
        console.log(existUser)
        if(existUser.length === 0){
          return db.query(query)
            .then(result => {
            const user = result[0];
            req.session['user_id'] = user['id'];
            res.json(user)
          });
        }else{
          res.status(401).send("User already exists")
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err)
      })
  });
  return router;
}
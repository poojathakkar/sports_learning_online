const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');
const { checkPassword } = require('../helper/loginHelper');
module.exports = db => {
  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.send("Entering login:")
  });
  //Post request for Login
  router.post('/', (req, res) => {
    console.log("Started");
    let user = null;
    const { email, password } = req.body
    const query = {
      text: "SELECT * FROM users WHERE email = $1;",
      values: [email]
    };
  db.query(query)
      .then(result => {
        user = result[0];
        if (user) {
          checkPassword(password, user)
            .then(result => {
              if (result) {
                //set Session
                req.session['user_id'] = user['id']
                let userObject = {
                  id: user['id'],
                  first_name: user['first_name'],
                  last_name: user['last_name'],
                  email: user['email'],
                  role: user['role']
                };
                res.json(userObject)
                //res.json(req.session['user_id'])
              } else {
                res.status(401);
                res.json({ error: "Password Incorrect" })
              }
            })
            .catch(err => console.log(err));
        } else {
          res.status(401);
          res.json({ error: "Username Incorrect" })
        }
      })
      .catch(err => console.log(err));
  });
  return router;
}
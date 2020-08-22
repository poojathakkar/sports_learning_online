//const properties = require('./json/properties.json');
//const users = require('./json/users.json');
const { Pool } = require('pg');
const { rows } = require('pg/lib/defaults');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'sports_learning'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  const queryString = `
  SELECT * FROM users 
  WHERE email = $1
  `;
  return pool.query(queryString, [email])
  .then(res => {
    if (res.rows) {
      return res.rows[0];
    } else {
      return null;
    }
  })
  .catch(err => console.error('query error', err.stack));
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  const queryString = `
  SELECT * FROM users 
  WHERE id = $1
  `;
  return pool.query(queryString, [id])
  .then(res => {
    if (res.rows) {
      return res.rows[0];
    } else {
      return null;
    }
  })
  .catch(err => console.error('query error', err.stack));
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  const queryString = `INSERT INTO users (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *`
  const values = [user.first_name, user.last_name, user.email, user.password, user.role];

  return pool.query(queryString, values)
  .then(res => res.rows)
}
exports.addUser = addUser;
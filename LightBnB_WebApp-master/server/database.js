const properties = require('./json/properties.json');
const users = require('./json/users.json');

//install postgreSQL and connect
const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */

 //to login
const getUserWithEmail = function(email) {
  
  return pool.query(`
  SELECT * 
  FROM users
  WHERE email = $1
  `, [email])
  .then(res =>{
    // console.log(res.rows)
    // console.log(res.rows[0].email)
    return res.rows[0]
    
  })
  .catch(err=>console.error('not found'))
  
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */

 //stay logged in after pg refresh
const getUserWithId = function(id) {

  return pool.query(`
  SELECT * 
  FROM users
  WHERE email = $1
  `, [id])
  .then(res =>{
    console.log(res.rows)
    return res.rows[0]
    
  })
  .catch(err=>console.error('not found'))


}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */


 //signup
const addUser =  function(user) {

// console.log(user)
// console.log(Object.values(user))


  return pool.query(`
  INSERT INTO users (name, email, password) 
  VALUES($1, $2, $3)

  `, Object.values(user))
  .then()
  .catch(err=>console.error('not found'))




}
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return getAllProperties(null, 2);
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {

  return pool.query(`
  SELECT * FROM properties
  LIMIT $1
  `, [limit])
  .then(res => res.rows);
}

exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;

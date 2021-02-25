const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'adoni',
    password : '2003',
    database : 'bot'
  }
});

module.exports = knex
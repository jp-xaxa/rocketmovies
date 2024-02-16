const cofig = require("../../../knexfile.js")
const knex = require("knex")

const connection = knex(cofig.development)

module.exports = connection

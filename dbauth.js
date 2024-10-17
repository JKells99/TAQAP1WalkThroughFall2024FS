const {Pool} = require("pg")
const pool = new Pool({
    user: 'postgres', //This _should_ be your username, as it's the default one Postgres uses
    host: 'localhost',
    database: 'dbfall2024', //This should be changed to reflect your actual database
    password: 'jordan1234', //This should be changed to reflect the password you used when setting up Postgres
    port: 5432,
});


module.exports = { pool };
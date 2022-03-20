const { Pool } = require("pg");

const pool = new Pool({
	user: process.env.PGUSER,
	host: "localhost",
	database: process.env.PGDB,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT,
});

module.exports = {
	query: (text, params) => pool.query(text, params),
};

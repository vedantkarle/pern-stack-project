const db = require("../db");

exports.getRestaurants = async (req, res) => {
	try {
		const result = await db.query("SELECT * FROM restaurants");
		res.status(200).json({
			status: "success",
			results: result.rows.length,
			data: {
				restaurants: result["rows"],
			},
		});
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
};

exports.getSingleRestaurant = async (req, res) => {
	try {
		const { id } = req.params;

		const result = await db.query("SELECT * FROM restaurants WHERE id = $1", [
			id,
		]);

		res.status(200).json({
			status: "success",
			data: {
				restaurant: result["rows"][0],
			},
		});
	} catch (error) {
		console.error(error);
	}
};

exports.createRestaurant = async (req, res) => {
	try {
		const { name, location, price_range } = req.body;

		const result = await db.query(
			"insert into restaurants (name, location, price_range) values ($1, $2, $3) returning *",
			[name, location, price_range],
		);

		res.status(201).json({
			status: "success",
			data: {
				restaurant: result["rows"][0],
			},
		});
	} catch (error) {
		console.error(error);
	}
};

exports.updateRestaurant = async (req, res) => {
	try {
		const { name, location, price_range } = req.body;
		const { id } = req.params;

		const result = await db.query(
			"update restaurants set name = $1, location = $2, price_range = $3 where id = $4 returning *",
			[name, location, price_range, id],
		);

		res.status(201).json({
			status: "success",
			data: {
				restaurant: result["rows"][0],
			},
		});
	} catch (error) {
		console.error(error);
	}
};

exports.deleteRestaurant = async (req, res) => {
	try {
		const { id } = req.params;

		await db.query("delete from restaurants where id = $1", [id]);

		res.status(204).json({
			status: "success",
		});
	} catch (error) {
		console.error(error);
	}
};

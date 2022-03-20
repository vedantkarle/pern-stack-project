const express = require("express");
const {
	getRestaurants,
	getSingleRestaurant,
	createRestaurant,
	updateRestaurant,
	deleteRestaurant,
} = require("../controllers/restaurants.controller");
const router = express.Router();

router.get("/", getRestaurants);
router
	.route("/:id")
	.get(getSingleRestaurant)
	.post(createRestaurant)
	.put(updateRestaurant)
	.delete(deleteRestaurant);

module.exports = router;

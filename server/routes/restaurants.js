const express = require("express");
const {
	getRestaurants,
	getSingleRestaurant,
	createRestaurant,
	updateRestaurant,
	deleteRestaurant,
} = require("../controllers/restaurants.controller");
const router = express.Router();

router.route("/").get(getRestaurants).post(createRestaurant);
router
	.route("/:id")
	.get(getSingleRestaurant)
	.put(updateRestaurant)
	.delete(deleteRestaurant);

module.exports = router;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleRestaurant } from "../api";
import Header from "../components/Header";

const Details = () => {
	const [restaurant, setRestaurant] = useState(null);

	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			try {
				const { data } = await getSingleRestaurant(id);

				setRestaurant(data.data.restaurant);
			} catch (e) {
				console.log(e);
			}
		})();
	}, [id]);

	return (
		<div>
			<Header title={restaurant?.name} />
		</div>
	);
};

export default Details;

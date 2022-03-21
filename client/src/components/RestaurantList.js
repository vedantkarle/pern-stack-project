import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteRestaurant, getRestaurants } from "../api";
import { Context } from "../context/Context";

const RestaurantList = () => {
	const { restaurants, setRestaurants } = useContext(Context);

	const navigate = useNavigate();

	const handleDelete = async id => {
		try {
			await deleteRestaurant(id);

			setRestaurants(prev => prev.filter(r => r.id !== id));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const { data } = await getRestaurants();

				setRestaurants(data.data.restaurants);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [setRestaurants]);

	return (
		<Table variant='simple' style={{ marginTop: "20px" }}>
			<Thead>
				<Tr>
					<Th>Restaurant</Th>
					<Th>Location</Th>
					<Th>Price Range</Th>
					<Th>Ratings</Th>
					<Th>Edit</Th>
					<Th>Delete</Th>
				</Tr>
			</Thead>
			<Tbody>
				{restaurants?.map(r => (
					<Tr key={r.id}>
						<Td>{r.name}</Td>
						<Td>{r.location}</Td>
						<Td>{"$".repeat(r.price_range)}</Td>
						<Td>Rating</Td>
						<Td>
							<Button
								onClick={() => navigate(`/restaurants/${r.id}/update`)}
								colorScheme='yellow'>
								Edit
							</Button>
						</Td>
						<Td>
							<Button onClick={() => handleDelete(r.id)} colorScheme='red'>
								Delete
							</Button>
						</Td>
					</Tr>
				))}
			</Tbody>
		</Table>
	);
};

export default RestaurantList;

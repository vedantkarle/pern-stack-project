import { Button, FormControl, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleRestaurant, updateRestaurant } from "../api";
import Header from "../components/Header";

const Update = () => {
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [priceRange, setPriceRange] = useState("Price Range");

	const { id } = useParams();
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await updateRestaurant(id, { name, location, price_range: priceRange });

			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const { data } = await getSingleRestaurant(id);

				setName(data.data.restaurant.name);
				setLocation(data.data.restaurant.location);
				setPriceRange(data.data.restaurant.price_range);
			} catch (e) {
				console.log(e);
			}
		})();
	}, [id]);

	return (
		<div>
			<Header title='Update Restaurant' />
			<div style={{ padding: "10px" }}>
				<form onSubmit={handleSubmit}>
					<FormControl style={{ padding: "10px" }}>
						<Input
							id='name'
							type='text'
							placeholder='Name'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</FormControl>
					<FormControl style={{ padding: "10px" }}>
						<Input
							id='location'
							type='text'
							placeholder='Location'
							value={location}
							onChange={e => setLocation(e.target.value)}
						/>
					</FormControl>
					<FormControl style={{ padding: "10px" }}>
						<Select
							value={priceRange}
							onChange={e => setPriceRange(e.target.value)}>
							<option disabled>Price Range</option>
							<option value={1}>$</option>
							<option value={2}>$$</option>
							<option value={3}>$$$</option>
							<option value={4}>$$$$</option>
							<option value={5}>$$$$$</option>
						</Select>
					</FormControl>
					<Button
						style={{ margin: "10px" }}
						type='submit'
						colorScheme='teal'
						variant='solid'>
						Update
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Update;

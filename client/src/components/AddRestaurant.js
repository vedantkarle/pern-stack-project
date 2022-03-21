import { Button, Flex, FormControl, Input, Select } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { createRestaurant } from "../api";
import { Context } from "../context/Context";

const AddRestaurant = () => {
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [priceRange, setPriceRange] = useState("Price Range");

	const { setRestaurants } = useContext(Context);

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const { data } = await createRestaurant({
				name,
				location,
				price_range: priceRange,
			});

			setRestaurants(prev => [...prev, data.data.restaurant]);

			setName("");
			setLocation("");
			setPriceRange("Price Range");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div style={{ padding: "10px" }}>
			<form onSubmit={handleSubmit}>
				<Flex alignItems='center'>
					<FormControl style={{ padding: "0 10px" }}>
						<Input
							id='name'
							type='text'
							placeholder='Name'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</FormControl>
					<FormControl style={{ padding: "0 10px" }}>
						<Input
							id='location'
							type='text'
							placeholder='Location'
							value={location}
							onChange={e => setLocation(e.target.value)}
						/>
					</FormControl>
					<FormControl style={{ padding: "0 10px" }}>
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
					<Button type='submit' colorScheme='teal' variant='solid'>
						Add
					</Button>
				</Flex>
			</form>
		</div>
	);
};

export default AddRestaurant;

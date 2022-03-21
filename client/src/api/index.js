import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:3005/api/v1/restaurants",
});

export const getRestaurants = () => API.get("/");

export const createRestaurant = data => API.post("/", data);

export const deleteRestaurant = id => API.delete(`/${id}`);

export const getSingleRestaurant = id => API.get(`/${id}`);

export const updateRestaurant = (id, data) => API.put(`/${id}`, data);

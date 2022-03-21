import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);

	return (
		<Context.Provider value={{ restaurants, setRestaurants }}>
			{children}
		</Context.Provider>
	);
};

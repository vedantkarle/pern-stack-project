import { Alert, Heading } from "@chakra-ui/react";
import React from "react";

const Header = ({ title }) => {
	return (
		<Alert status='info' justifyContent='center'>
			<Heading>{title}</Heading>
		</Alert>
	);
};

export default Header;

import React from "react";
import { BrowserRouter as Router, Routes as ReactRoutes, Route, Link } from "react-router-dom";
import Home from "./Home";
import HowToBuy from "./HowToBuy";
import Purpose from "./Purpose";

const Routes: React.VoidFunctionComponent = () => {
	return (
	<Router>
		<ReactRoutes>
			<Route path="/" element={<Home />} />
			<Route path="/howtobuy" element={<HowToBuy />} />
			<Route path="/purpose" element={<Purpose />} />
		</ReactRoutes>
	</Router>
	)
}

export default Routes;

import React from "react";
import { BrowserRouter as Router, Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "./Home";
import HowToBuy from "./HowToBuy";
import Purpose from "./Purpose";
import NewPage from "./NewPage";

const Routes: React.FC<{}> = _ => {
	return (
	<Router>
		<ReactRoutes>
			<Route path="/" element={<Home />} />
			<Route path="/howtobuy" element={<HowToBuy />} />
			<Route path="/purpose" element={<Purpose />} />
			<Route path="/newpage" element={<NewPage />} />
		</ReactRoutes>
	</Router>
	)
}

export default Routes;

import React from "react";
import { BrowserRouter as Router, Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "./Home";
import HowToBuy from "./HowToBuy";
import Purpose from "./Purpose";
import NewPage from "./NewPage";
import StartPage from "./StartPage";
import LessonPlan from "./LessonPlan";
import Financing from "./Financing";
import EquityByAgents from "./EquityByAgents";
import EquityLinksPage from "./EquityLinksPage";
import OverviewHomeBuyingProcess from "./OverviewHomeBuyingProcess";

const Routes: React.FC<{}> = _ => {
    return (
    <Router>
        <ReactRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/howtobuy" element={<HowToBuy />} />
            <Route path="/purpose" element={<Purpose />} />
            <Route path="/newpage" element={<NewPage />} />
            <Route path="/start" element={<StartPage />} />
	    <Route path="/lesson-plan" element={<LessonPlan />} />
	    <Route path="/financing" element={<Financing />} />
	    <Route path="/equity-agents" element={<EquityByAgents />} />
	    <Route path="/equity-links"  element={<EquityLinksPage />} />
	    <Route path="/buy-overview" element={<OverviewHomeBuyingProcess />} />
        </ReactRoutes>
    </Router>
    )
}

export default Routes;


import React, { useState } from "react";
import Head from "./PageHeader";

const EquityByAgents: React.FC<{}> = _ => {
	const [click, setClick] = useState<boolean>(false);
	return (
		<div className="App">
			{Head("Equity Agents", click, setClick )}
			<h2>What is this (the Idea)</h2>
			<p>
				Ranking system that measures listing information agents provide to customers vs. customer’s information (ethnicity, budget, areas of interest)
			</p>
			<p>
				We Anonomyze customers for agents when providing listing information (only show credit history, etc)
			</p>
			<p>
				The follow agents are not exaustive list of humans that do some effort to be fair in the market. 
			</p>
		</div>
	)
}

export default EquityByAgents;

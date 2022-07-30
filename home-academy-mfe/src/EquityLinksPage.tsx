import React, {useState} from "react";
import Head from "./PageHeader";

const EquityLinksPage: React.FC<{}> = _ => {
	const [click, setClick] = useState<boolean>(false);
	return (
		<div className="App">
			{Head("Equity Links", click, setClick )}
			<p>
				We target for house equity, the follow links seems to share our vision, but they are unreelated with our team.
			</p>
			<p>
				<a target="_new" href="https://www.habitat.org/stories/what-housing-equity">Habitat for Humanity </a>
			</p>
			<p>
				<a target="_new" href="https://projects.newsday.com/">News Day</a>
			</p>
		</div>
	)
}
export default EquityLinksPage;

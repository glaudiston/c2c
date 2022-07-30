import { useState } from "react";
import Head from "./PageHeader";
import YoutubeVideo from "./YoutubeVideo"

function Financing() {
  const [click, setClick] = useState<boolean>(false);
	return (
		<div className="App">
			{Head("Financing a home", click, setClick )}
			<p>Here a good article on this topic</p>
			<a target="_new" href="https://www.supermoney.com/how-to-finance-a-house/" >How to finance a house</a> 
		</div>
	)
}

export default Financing;

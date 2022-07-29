import { useState } from "react";
import Head from "./PageHeader";
import YoutubeVideo from "./YoutubeVideo"

function HowToBuy() {
  const [click, setClick] = useState<boolean>(false);
	return (
		<div className="App">
		    {Head("How to buy", click, setClick )}
			<YoutubeVideo embedId="GyXyRkUhotI" />
		</div>
	)
}

export default HowToBuy;

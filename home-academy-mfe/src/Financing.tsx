import { useState } from "react";
import Head from "./PageHeader";
import YoutubeVideo from "./YoutubeVideo"

function Financing() {
  const [click, setClick] = useState<boolean>(false);
	return (
		<div className="App">
		    {Head("Financing a home", click, setClick )}
			<img src="./images/house-buy.png" className={click ? 'show-menu App-logo' : 'hide-menu App-logo'}  alt="logo" />
			<div>
			
			<h1>
				4 step example
			</h1>	
			<p>
				using this example you can see how to purchase a house in 4 basic steps.
			</p>
			<YoutubeVideo embedId="GyXyRkUhotI" />
			</div>
			
			<div>
			
			<h1>
				Step 1
			</h1>

			<p>
				see this video to see how to check your credit score as mentioned before.
			</p>
			<YoutubeVideo embedId="VdLrbOb2ydo" />
			</div>
			<div>
				
			<h1>
				Step 2
			</h1>
			<p>
				see this video to see how to find the perfect real estate agent
			</p>
			<YoutubeVideo embedId="dTgiw0VwMVk" />
			</div>
			<div>
				
				<h1>
					Step 3
				</h1>
				<p>
					see this video on how to close the deal on the perfect house
				</p>
				<YoutubeVideo embedId="lL_yqKrUdCQ" />
			</div>
			
			

		</div>
	)
}

export default Financing;

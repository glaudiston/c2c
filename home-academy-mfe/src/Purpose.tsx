import React, { useState } from "react";
import Head from "./PageHeader";

const Purpose: React.FC<{}> = props => {
  const [click, setClick] = useState<boolean>(false);
	return (
    <div className="App">
		
	{Head("Our Purpose", click, setClick )}
	<div>
	<img src="./images/purpose.png" className={click ? 'show-menu App-logo' : 'hide-menu App-logo'}  alt="logo" />
	</div>
	Often families in old, impoverished towns with primary infrastructure and little to none recreational events raise children who go to the nearby impoverished schools with basic funding and a lack of opportunities to branch. This cycle continues and raises generations that are less likely to expand and attempt to buy a home due to lack of education. To help break this cycle, we wanted to build a website that offers free and trustworthy content to provide to people that have little to none knowledge in buying a house and help guide them through the intricate process of home-buying confidently.   


		</div>
	)
}

export default Purpose;

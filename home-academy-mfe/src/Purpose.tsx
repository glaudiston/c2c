import React, { useState } from "react";
import Head from "./PageHeader";

const Purpose: React.FC<{}> = props => {
  const [click, setClick] = useState<boolean>(false);
	return (
    <div className="App">
	{Head("Our Purpose", click, setClick )}
		</div>
	)
}

export default Purpose;

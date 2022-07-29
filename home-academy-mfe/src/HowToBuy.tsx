import { useState } from "react";
import Head from "./PageHeader";

function HowToBuy() {
  const [click, setClick] = useState<boolean>(false);
	return (
    <div className="App">
	{Head("How to buy", click, setClick )}
		</div>
	)
}

export default HowToBuy;

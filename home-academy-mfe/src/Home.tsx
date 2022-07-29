import { useState } from "react";
import Head from "./PageHeader"
import { Link } from 'react-router-dom';
function Home() {
  const [click, setClick] = useState<boolean>(false);

  return (
    <div className="App">
	{Head("Home", click, setClick )}
      <div>
        <img src="./image.png" className={click ? 'show-menu' : 'hide-menu'} />
	<h2>Navigating the Homebuying Journey with Confidence</h2>
        <p>
          At Home Academy, we know that the homebuying process can be intimidating. We’re here to give you the information you need to find a place to call your own. Start your journey with our verified selection of educational material tailored to your needs.
  </p>
      </div>
      <div id='div-btn'>
	  <Link to="/start">
		  <button>Click here to begin the journey</button>
	  </Link>
      </div>
    </div>
  );
}

export default Home;

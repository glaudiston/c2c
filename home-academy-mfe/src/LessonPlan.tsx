import { useState } from "react";
import Head from "./PageHeader";
import { Link } from 'react-router-dom';
import YoutubeVideo from "./YoutubeVideo"

function LessonPlan() {
  const [click, setClick] = useState<boolean>(false);
	return (
		<div className="App">
		    {Head("Buying a House 101", click, setClick )}
			<div>
			
			<h3>
				Module 1: Overview
			</h3>	
			<ul>
				<li>
				  <Link to="/buy-overview">
				    <button>Overview of the homebuying process</button>
				      </Link>
				</li>
				<li>
					<a target="_new" href="https://learn.g2.com/real-estate-terms" >
					    <button>Real Estate Terminology</button>
					</a>
				</li>
				<li>
					<a target="_new" href="https://en.wikipedia.org/wiki/Real_estate_agent">
						<button>Real Estate Agents</button>
					</a>
				</li>
				<li>
					<Link to="/financing">
					    <button>Financing</button>
					</Link>
				</li>
			</ul>
		
			</div>
			
			<div>
			
			<h3>
				Module 2: Financing Options for Low-Income Families
			</h3>	
			<ul>
				<li>
				  <Link to="/lesson-plan">
				    <button>
					  Fixing Your Credit Score
					  </button>
	    	      </Link>
				</li>
				<li>
				<Link to="/lesson-plan">
				    <button>
					Downpayment Assistance Programs
					</button>
	    	      </Link>
				</li>
				<li>
				<Link to="/lesson-plan">
				    <button>
					Good Neighbour Next Door Program
					</button>
	    	      </Link>
				</li>
				<li>
				<Link to="/lesson-plan">
				    <button>
					Penalty Free IRA Withdrawal
					</button>
	    	      </Link>
				</li>
			</ul>
		
			</div>

		</div>
	)
}

export default LessonPlan;

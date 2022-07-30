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
				  <Link to="/overview">
				    <button>
					  Overview of the homebuying process
					  </button>
	    	      </Link>
				</li>
				<li>
				<Link to="/terminology">
				    <button>
					Real Estate Terminology
					</button>
	    	      </Link>
				</li>
				<li>
				<Link to="/agents">
				    <button>
					Real Estate Agents
					</button>
	    	      </Link>
				</li>
				<li>
				<Link to="/financing">
				    <button>
					Financing
					</button>
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

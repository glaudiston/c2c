import { useState } from "react";
import Head from "./PageHeader";
import { Link } from 'react-router-dom';

const incomeOptions: React.FC<{}> = _ => {
	const incomeList = [
		"< $20,000", 
		"$20,000 - $39,999", 
		"$40,000 - $49,999", 
		"$50,000 - $74,999",
		"$75,000 - $99,999",
		">$100,000",
	];
	return (
		<div id='div-select-income' className='div-opt'>
		{
			incomeList.map((incomeRange, index) => 
			<div key={ 'div-income-' + index} >
				<input type="radio" id={'income-' + index} key={'income-' + index} value={incomeRange} name="income" />
				<label key={'label-income' + index} className='optlbl' htmlFor={'income-' + index} >
					{incomeRange}
				</label>
			</div>
		)
		}
	</div>
		)
}

const creditScoreOptions: React.FC<{}> = _ => {
	const creditScoreList = [
		"300-579 (Poor)", 
		"580-669 (Fair)", 
		"670-739 (Good)", 
		"740-799 (Very good)",
		"800-850 (Excellent)",
	];
	return (
		<div className='div-opt'>
		{
			creditScoreList.map((creditScoreRange, index) => 
			<div key={ 'div-credit-score-' + index} >
				<input type="radio" id={'credit-score-' + index} key={'credit-score-' + index} value={creditScoreRange} name="credit-score" />
				<label key={'label-credit-score' + index} className='optlbl' htmlFor={'credit-score-' + index} >
					{creditScoreRange}
				</label>
			</div>
		)
		}
	</div>
		)
}
function StartPage() {
	const [click, setClick] = useState<boolean>(false);


	return (
		<div className="App">
			{Head("Home Academy", click, setClick )}
			<h2>Tell Us About Yourself</h2>
			<h3>1. What is your annual income?</h3>
			{incomeOptions({})}
			<h3>2. What is your credit score?</h3>
			{creditScoreOptions({})}
		      <div id='div-btn'>
			<Link to="/lesson-plan">
			  <button>Lesson Plan</button>
	    	        </Link>
		      </div>
		</div>
	)
}

export default StartPage;



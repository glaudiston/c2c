import "./LessonPlan.css"
import { useState } from "react";
import Head from "./PageHeader";
import { Link } from 'react-router-dom';
import YoutubeVideo from "./YoutubeVideo"

enum LessonStatus {
	Pending,
	Started,
	Done
}
interface ModuleItem {
	id: string
	title: string
	description: string
	estimatTimeInMinutes: number
	link: string
	isExternal: boolean
	status: LessonStatus
}

interface Module {
	id: string
	title: string
	items: ModuleItem[]
}

function getModuleData(): Module[] {
	return [
		{
			id: "overview",
			title: "Overview",
			items: [
				{
					id: "overview",
					title: "Overview of the homebuying process",
					description: "If you don't know how to start, let's talk about how it works...",
					estimatTimeInMinutes: 45,
					link: "/buy-overview",
					isExternal: false,
					status: LessonStatus.Done,
				},
				{
					id: "real-state-Terminology",
					title: "Real Estate Terminology",
					description: "Understand what they mean...",
					estimatTimeInMinutes: 15,
					link: 'https://learn.g2.com/real-estate-terms',
					isExternal: true,
					status: LessonStatus.Done
				},
				{
					id: "agents",
					title: "Real Estate Agents",
					description: "Know how a real state agent works and why it matters...",
					estimatTimeInMinutes: 30,
					link: "https://en.wikipedia.org/wiki/Real_estate_agent",
					isExternal: true,
					status: LessonStatus.Started
				},
				{
					id: "financing",
					title: "Financing",
					description: "It can be your best or the only way...",
					estimatTimeInMinutes: 45,
					link: "/financing",
					isExternal: true,
					status: LessonStatus.Pending
				},
			],
		},
		{
			id: "financing",
			title: "Financing Options for Low-Income Families",
			items: [
				{
					id: "fixing-credit-score",
					title: "Fixing Your Credit Score",
					description: "If you need financing, this is a important step",
					estimatTimeInMinutes: 10,
					link: "/fix-credit-score",
					isExternal: false,
					status: LessonStatus.Pending
				},
				{
					id: "downpay-assist",
					title: "Downpayment Assistance Programs",
					description: "Somethings you just need help...",
					estimatTimeInMinutes: 20,
					link: "/downpay-assist",
					isExternal: false,
					status: LessonStatus.Pending
				},
				{
					id: "neighbour",
					title: "Good Neighbour Next Door Program",
					description: "",
					estimatTimeInMinutes: 10,
					link: "/neighbour",
					isExternal: false,
					status: LessonStatus.Pending
				},
				{
					id: "penalty-withdral",
					title: "Penalty Free IRA Withdrawal",
					description: "",
					estimatTimeInMinutes: 20,
					link: "/penalty-withdral",
					isExternal: false,
					status: LessonStatus.Pending
				}
			]
		}
	]
}

function LessonPlan() {
	const [click, setClick] = useState<boolean>(false);
	const modules: Module[] = getModuleData();
	return (
		<div className="App">
		    {Head("Buying a House 101", click, setClick )}
			{modules.map((module, index) => {
				return <div key={'div-'+module.id} className="lesson-module" >
					<h3 key={'h3-'+module.id}>Module {index +1}: {module.title}</h3>
					<ul key={'ul-'+module.id}>
						{module.items.map((item, index) => {
						return <li key={'li-'+module.id+'.'+item.id} className={'lesson-status-'+item.status} >
						  <Link key={'link-'+module.id+'.'+item.id} to={item.link}>
						    <p key={'button-'+module.id+'.'+item.id}>{item.title}</p>
						    <p key={'estimated-time-'+module.id+'.'+item.id}>{item.estimatTimeInMinutes} min</p>
						  </Link>
					      </li>
						})}
					</ul>
					</div>
			})}

		</div>
	)
}

export default LessonPlan;

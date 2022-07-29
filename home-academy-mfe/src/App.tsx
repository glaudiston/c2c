import './App.css'
import styled from "styled-components";
import { useState } from "react";
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const MenuLabel = styled.label`
  position: fixed;
  top: 3rem;
  right: 6rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

interface Props {
 clicked : boolean;
}

const Icon = styled.span`
  position: relative;
  background-color: ${(props: Props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Menu = (click: boolean) => {
	return <Transition in={click} timeout={500}>
          {state => (
            <div className={'menu menu-' + state} >
              <ul>
               <li><a href="/">Home</a></li>
               <li><a href="/howtobuy">How to buy a home</a></li>
               <li><a href="/purpose">Our Purpose</a></li>
              </ul>
            </div>
          )}
	</Transition>
}

const PageHeader: React.FC<{ children: string }> = ({ children }) => (
      <header className="App-header">
	<h1>{children}</h1>
      </header>
)

function head(title: string, click: boolean, setClick: any){
const handleClick = () => setClick(!click);
return (
<div>
<PageHeader>{title}</PageHeader>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      {Menu(click)}
</div>
)
}

function Home() {
  const [click, setClick] = useState<boolean>(false);

  return (
    <div className="App">
	{head("Home", click, setClick )}
      <div>
        <img src="./image.png" className={click ? 'show-menu App-logo' : 'hide-menu App-logo'}  alt="logo" />
	<h2>Navigating the Homebuying Journey with Confidence</h2>
        <p>
          At Home Academy, we know that the homebuying process can be intimidating. We’re here to give you the information you need to find a place to call your own. Start your journey with our verified selection of educational material tailored to your needs.
        </p>
      </div>
    </div>
  );
}

function HowToBuy() {
  const [click, setClick] = useState<boolean>(false);
	return (
    <div className="App">
	{head("How to buy", click, setClick )}
		</div>
	)
}

function Purpose() {
  const [click, setClick] = useState<boolean>(false);
	return (
    <div className="App">
	{head("Our Purpose", click, setClick )}
		</div>
	)
}

function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/howtobuy" element={<HowToBuy />} />
				<Route path="/purpose" element={<Purpose />} />
			</Routes>
		</Router>
	)
}

export default AppRouter;

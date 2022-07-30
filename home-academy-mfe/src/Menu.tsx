import './Menu.css'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const MenuLabel = styled.label`
  position: fixed;
  top: 1rem;
  right: 1rem;
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

const MenuIcon = styled.span`
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
	const menuClassName='menu menu-' + (click ? 'open': 'closed')
	return (
        <div className={menuClassName} >
          <ul>
		<Link to='/'><li>Home</li></Link>
		<Link to='/howtobuy'><li>How to buy a home</li></Link>
		<Link to='/financing'><li>Financing</li></Link>
		<Link to='/purpose'><li>Our Purpose</li></Link>
		<Link to='/start'><li>Start learning</li></Link>
		<Link to='/equity-agents'><li>Equity Agents Rank</li></Link>
		<Link to='/equity-links'><li>Equity links</li></Link>
          </ul>
        </div>
      )
}

export { Menu, MenuLabel, MenuIcon };

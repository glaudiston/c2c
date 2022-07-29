import { Menu, MenuLabel, MenuIcon } from "./Menu";

const PageHeader: React.FC<{ children: string }> = ({ children }) => (
      <header className="App-header">
	<h1>{children}</h1>
      </header>
)

function Head(title: string, click: boolean, setClick: any){
	const handleClick = () => setClick(!click);
	return (
	<div>
	<PageHeader>{title}</PageHeader>
	      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
		<MenuIcon clicked={click}>&nbsp;</MenuIcon>
	      </MenuLabel>
	      {Menu(click)}
	</div>
	)
}

export default Head;

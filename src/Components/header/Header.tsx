
import {Link,NavLink} from 'react-router-dom';

export function Header() {
	return (
		<div  className="py-10 flex justify-between items-center mb-22 ">
			<Link to="/">
				<span className="text-red-400 self-center whitespace-nowrap text-3xl font-semibold ">Fərid Zeynalzadə</span>
			</Link>

			<div className="flex gap-x-6 text-xl font-medium text-red-400 ">
				<NavLink to='/'>Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/projects">Projects</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</div>
		</div>
	);
}

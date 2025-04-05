import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-dark bg-gradient">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-light">Star Wars</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">favoritos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
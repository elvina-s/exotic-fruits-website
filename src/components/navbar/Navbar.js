import { NavLink } from 'react-router-dom';
import "./styles.css";
import { useState } from 'react';
import Hamburger from "./Hamburger.png";

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	const [showNav, setShowNav] = useState(false)
	const toggleNavItems = () => {
		setShowNav(!showNav)
	}

	return (
		<div className="Navbar">
			<nav className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
						Exotic Fruits Shop
					</NavLink>
					<div className="menu-icon" onClick={() => toggleNavItems()}>
						<img className="icon" src={Hamburger} alt="icon"/>

					</div>
					<div className={`nav-elements  ${showNav && 'active'}`}>
						<ul className="nav-list">
							<li className="nav-list__item">
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive ? activeLink : normalLink
									}
								>
									Home
								</NavLink>
							</li>

							<li className="nav-list__item">
								<NavLink
									to="/faq"
									className={({ isActive }) =>
										isActive ? activeLink : normalLink
									}
								>
									FAQ
								</NavLink>
							</li>

							<li className="nav-list__item">
								<NavLink
									to="/cart"
									className={({ isActive }) =>
										isActive ? activeLink : normalLink
									}
								>
									Cart
								</NavLink>
							</li>
						</ul>
					</div>

				</div>
			</nav>
		</div>
	);
}

export default Navbar;
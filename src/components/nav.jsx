
import React from "react";
import { Link } from "react-router-dom";
//import css
import styles from "./nav.module.css";

export default function Navbar() {
	return (
		<div id={styles.start}>
			<img src={"/otherpages.jpg"} alt={"large cloudSole logo"} width={"100%"} />

			<nav className={styles.flexContainer}>
				<NavItem name="New arrivals" to="/new" />
				<NavItem name="Adidas" to="/brand/adidas" />
				<NavItem name="Jordan" to="/brand/jordan" />
				<Link name="index" to="/">
					<img id={styles.cloudSole} src={"/logo.png"} />
				</Link>
				<NavItem name="Vans" to="/brand/vans" />
				<NavItem name="Nike" to="/brand/nike" />
				<NavItem name="Nike dunk" to="/brand/nike-dunk" />
				<Link to="cart"> <i className="material-icons" id={styles.shoppingIcon}>shopping_basket</i></Link>
				<label className={styles.switch}>
					<input type="checkbox" id={styles.colorPreferance} />
					<span className={`${styles.slider} ${styles.round}`}></span>
				</label>
			</nav>
		</div>
	);
}

function NavItem({ name, to }) {
	return (
		// link for internal routes 
		<Link className={styles.navLink} to={to}>
			{name}
		</Link>
	);
}

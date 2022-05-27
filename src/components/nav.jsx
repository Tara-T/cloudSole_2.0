import styles from "./nav.module.css";
import React from "react";
import { Link } from "react-router-dom";
import navPhoto from "../public/otherpages.jpg";
import cloudSole from "../public/logo.png";

export default function Navbar() {
	return (
		<div id={styles.start}>
			<img src={navPhoto} alt={"large cloudSole logo"} width={"100%"} />

			<nav id="mainNav" className={styles.flexContainer}>
				<NavItem name="New arrivals" to="/new" />
				<NavItem name="Adidas" to="/brand/adidas" />
				<NavItem name="Jordan" to="/brand/jordan" />
				<Link name="index" to="/">
					<img id={styles.cloudSole} src={cloudSole} />
				</Link>
				<NavItem name="Vans" to="/brand/vans" />
				<NavItem name="Nike" to="/brand/nike" />
				<NavItem name="Nike dunk" to="/brand/nike-dunk" />
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
		//kinda defeats the purpose of this
		<Link className={styles.navLink} to={to}>
			{name}
		</Link>
	);
}

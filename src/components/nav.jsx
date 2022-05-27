import styles from "./nav.module.css"
import React from "react";
import { Link } from "react-router-dom";
import navPhoto from "../pictures/otherpages.jpg";
import cloudSole from "../pictures/logo.png";


export default function Navbar() {
    return (
        <div id={styles.start}>
            <img src={navPhoto} alt={"large cloudSole logo"} width={"100%"} />

            <nav id="mainNav" className={styles.flexContainer}>
                <NavItem name="New arrivals" to="/new" />
                <NavItem name="Adidas" to="/adidas" />
                <NavItem name="Jordan" to="/jordan" />
                <Link name="index" to="/">
                    <img id={styles.cloudSole} src={cloudSole} /></Link>
                <NavItem name="Vans" to="/vans" />
                <NavItem name="Nike" to="/nike" />
                <NavItem name="Nike dunk" to="/nike-dunk" />
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
        <Link className={styles.navLink} to={to}>{name}</Link>
    );
}
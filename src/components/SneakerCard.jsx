import styles from "./SneakerCard.module.css";
import React from "react";
import { Link } from "react-router-dom";

export function SneakerCard({
	articleno,
	brand,
	brandlogo,
	colorway,
	description,
	isNewArrival,
	jordanpopularity,
	jordantype,
	name,
	otherpicture1,
	otherpicture2,
	otherpicture3,
	otherpicture4,
	picture,
	price,
	style,
	id,
}) {
	return (
		<div className={styles.card}>
			{/* how would this work with images cuz i have to import it at the top before using it
			or i could use require() but that doesn't work */}
			<Link to={`/shoe/${encodeURIComponent(id)}`}>
				<img src={`/${picture}`} />
				<h3>{name}</h3>
				<h4 id="price">{price} kr</h4>
			</Link>
			<button className="btn" /* onClick={addtocart('${id}')} */>
				Add to cart
			</button>
		</div>
	);
}

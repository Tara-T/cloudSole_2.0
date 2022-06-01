import styles from "./SneakerCard.module.css";
import React from "react";
import { Link } from "react-router-dom";

export function SneakerCard({
	name,
	picture,
	price,
	id,
}) {
	return (
		<div className={styles.card}>
			<Link to={`/shoe/${encodeURIComponent(id)}`}>
				<img src={`/main/${picture}`} />
				<h3>{name}</h3>
				
			</Link>
			<h4 className={styles.price}>{price} kr</h4>
			<button className={styles.btn} /* onClick={addtocart('${id}')} */>
				Add to cart
			</button>
		</div>
	);
}

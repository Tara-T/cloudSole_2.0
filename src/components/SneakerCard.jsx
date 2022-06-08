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
			<button className={styles.btn}  onClick={() => {if ((sessionStorage.getItem("cart") || "").includes(id)) return alert("No duplicates allowed opsy");addToCart(id)}} >
				Add to cart
			</button>
		</div>
	);
}

function addToCart(sneakerId) {
    const cartJSON = sessionStorage.getItem("cart")
    const cart = JSON.parse(cartJSON || "[]")
    cart.push(sneakerId)
    sessionStorage.setItem("cart", JSON.stringify(cart))
	console.debug(cart)

  }
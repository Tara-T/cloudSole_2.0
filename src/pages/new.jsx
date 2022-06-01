import { useEffect, useState } from "react";
import { Sneaker } from "../models/sneaker";
import { SneakerCard } from "../components/SneakerCard";
import React from "react";
import styles from "../components/SneakerCard.module.css";

export default function New() {
	const [sneakers, setSneakers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		Sneaker.findAllNewShoes().then((sneakers) => {
			setSneakers(sneakers);
			setLoading(false);
			console.debug(sneakers);
		});
	}, []);

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : sneakers.length ? (
				<div className={styles.sneakerGrid}>
					{sneakers.map((sneaker) => <SneakerCard key={sneaker.id} {...sneaker} />)}
				</div>
			) : (
				<p>No sneakers found</p>
			)}
		</div>
	);
}

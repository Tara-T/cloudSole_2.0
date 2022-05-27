import { useEffect, useState } from "react";
import { Sneaker } from "../models/sneaker";
import { SneakerCard } from "../components/SneakerCard";
import React from 'react'

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
			<h1>New page</h1>
			{loading ? (
				<p>Loading...</p>
			) : sneakers.length ? (
				sneakers.map((sneaker) => <SneakerCard key={sneaker.id} {...sneaker} />)
			) : (
				<p>No sneakers found</p>
			)}
		</div>
	);
}

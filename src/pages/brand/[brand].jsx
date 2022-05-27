import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Sneaker } from "../../models/sneaker";
import { SneakerCard } from "../../components/SneakerCard";

export default function Brand() {
	//gets the paremeter of button clicked
	const params = useParams();
	const paramsCapitalBrand =
		params.brand.charAt(0).toUpperCase() + params.brand.slice(1);
	//sets the state for sneakers as an empty array (find out why states are nesecary)
	const [sneakers, setSneakers] = useState([]);
	// sets the loading state as true
	const [loading, setLoading] = useState(true);

	//this is run after the page is renderd
	useEffect(() => {
		//then gets the brand by button clicked
		Sneaker.findAllByBrand(paramsCapitalBrand).then((sneakers) => {
			//sets sneaker state as an array with sneakers
			setSneakers(sneakers);
			//cancels the loading state
			setLoading(false);

			console.debug(sneakers);
			console.debug(paramsCapitalBrand);
		});
	}, []);

	return (
		<div>
			<h1>{paramsCapitalBrand}</h1>
			{/* if state loading = true then do <p>loading</p> */}
			{loading ? (
				<p>Loading...</p>
			) : //else if (not sure whats the if)(if sneaker length is more than 0?)print our card
			sneakers.length ? (
				//map() makes new array from sneakers?
				sneakers.map((sneaker) => <SneakerCard key={sneaker.id} {...sneaker} />)
			) : (
				//else displays that
				<p>No sneakers found</p>
			)}
		</div>
	);
}

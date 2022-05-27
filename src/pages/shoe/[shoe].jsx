import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Sneaker } from "../../models/sneaker";

export default function Shoe() {
	//gets the paremeter of button clicked
	//how to differentiate from nav button vs shoe button
	const params = useParams();
	// const paramsCapitalName =
	// 	params.shoe.charAt(0).toUpperCase() +
	// 	params.shoe.slice(1); /* don't need this for shoes */
	//sets the state for sneakers as an empty array (find out why states are nesecary)
	const [sneaker, setSneaker] = useState();
	// sets the loading state as true
	const [loading, setLoading] = useState(true);

	//this is run after the page is renderd
	useEffect(() => {
		//then gets the brand by button clicked
		Sneaker.findById(params.shoe).then((sneaker) => {
			//sets sneaker state as an array with sneakers
			setSneaker(sneaker);
			//cancels the loading state
			setLoading(false);

			console.debug(sneaker);
		});
	}, []);

	return (
		<div>
			<h1>{sneaker && sneaker.name}</h1>
			{/* if state loading = true then do <p>loading</p> */}
			{loading ? (
				<p>Loading...</p>
			) : sneaker ? (
				//i'll deal with this later
				<p>{sneaker.description}</p>
			) : (
				//else displays that
				<p>No sneakers found</p>
			)}
		</div>
	);
}

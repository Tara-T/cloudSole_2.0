import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { Sneaker } from "../models/sneaker";


export default function Shoe() {
	//gets the paremeter of button clicked
	//how to differentiate from nav button vs shoe button
	const params = useParams();
	const paramsCapitalName = params.name.charAt(0).toUpperCase() + params.name.slice(1); /* don't need this for shoes */
	//sets the state for sneakers as an empty array (find out why states are nesecary)
	const [sneakers, setSneakers] = useState([]);
	// sets the loading state as true
	const [loading, setLoading] = useState(true);

	//this is run after the page is renderd
	useEffect(() => {
		//then gets the brand by button clicked 
		Sneaker.findByname(paramsCapitalBrand).then((sneakers) => {
			//sets sneaker state as an array with sneakers
			setSneakers(sneakers);
			//cancels the loading state
			setLoading(false);

			console.debug(sneakers);
			console.debug(paramsCapitalName);
		});
	}, []);
	
	return (
		<div>
			<h1>{paramsCapitalName}</h1>
			{/* if state loading = true then do <p>loading</p> */}
			{loading ? (
				<p>Loading...</p>
			) : sneakers.length ? (
				//i'll deal with this later
				<p>{description}</p>
			) : (
				//else displays that
				<p>No sneakers found</p>
			)}
		</div>
	);
}

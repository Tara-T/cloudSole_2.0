import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Sneaker } from "../../models/sneaker";
import { SneakerInfo } from "../../components/SneakerInfo";

export default function Shoe() {
	//gets the paremeter of button clicked
	//how to differentiate from nav button vs shoe button
	const params = useParams();
	//sets the state for sneakers as an empty array (find out why states are nesecary)
	const [sneaker, setSneaker] = useState();
	// sets the loading state as true
	const [loading, setLoading] = useState(true);

	//this is run after the page is rendered
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
			{/* <h1>{sneaker && sneaker.name}</h1> */}
			{/* if state loading = true then do <p>loading</p> */}
			{loading ? (
				<p>Loading...</p>
			) : sneaker ? (
				//i'll deal with this later
				<SneakerInfo key={sneaker.id} {...sneaker}/>
			) : (
				//else displays that
				<p>No sneakers found</p>
			)}
		</div>
	);
}

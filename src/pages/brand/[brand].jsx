import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Sneaker } from "../../models/sneaker";
import { SneakerCard } from "../../components/SneakerCard";
import styles from "../../components/SneakerCard.module.css";


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
		/* refresh page when something chanages */
	}, [params]);
	return (
		
		<div>
			{/* <h1>{paramsCapitalBrand}</h1>
			<div>
			 <div id="secUp">
				<button /* onClick={Sneaker.findAllWithStyle(style)}>{paramsCapitalBrand}</button>
				<button onClick={Sneaker.findAllWithStyle(paramsCapitalBrand + "High")} >High</button>
				<button onClick="hentsneakersMedstyle('JordanLow')" >Low</button>
				<div className="icons-bar">

					<a href="cart-wishlist.html"> <i class="material-icons" /* style="font-size:50px;color:#3de1b3;">shopping_basket</i></a>
				</div>
			</div>
			</div> 
			{/* if state loading = true then do <p>loading</p> */}
			{loading ? (
				<p>Loading...</p>
			) : //else if (not sure whats the if)(if sneaker length is more than 0?)print our card
				sneakers.length ? (
				<div className={styles.sneakerGrid}>

					{sneakers.map((sneaker) => <SneakerCard key={sneaker.id} {...sneaker}  />)} </div>
				) : (
					//else displays that
					<p>No sneakers found</p>
				)}
		</div>
	);
}

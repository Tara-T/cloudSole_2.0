import styles from "./SneakerInfo.module.css";
import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';


import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Sneaker } from "../../models/sneaker";
import { SneakerInfo } from "../../components/SneakerInfo";



export function Sort({
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
}) {
    
    return (

        <div>
			 <div id="secUp">
				<button onClick={Sneaker.findAll(name)} >{name}</button>
				<button onClick={Sneaker.findAllWithStyle(name + "High")} >High</button>
				<button onClick={Sneaker.findAllWithStyle(name + "Low")} >Low</button>
				<div className="icons-bar">

					<a href="cart-wishlist.html"> <i class="material-icons" /* style="font-size:50px;color:#3de1b3;"*/>shopping_basket</i></a>
				</div>
			</div>
			</div> 
    );
}


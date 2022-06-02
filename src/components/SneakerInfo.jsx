import styles from "./SneakerInfo.module.css";
import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import { Sneaker } from '../models/sneaker.js'


export function SneakerInfo({
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
    id,
}) {
    const zoomOutProperties = {
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        scale: 0.4,
        arrows: true,
        autoplay: false,
    };
    const images = [
        `/main/${picture}`,
        `/otherpicture1/${otherpicture1}`,
        `/otherpicture2/${otherpicture2}`,
        `/otherpicture3/${otherpicture3}`,
        `/otherpicture4/${otherpicture4}`,
    ];
    return (

        <div className={styles.mainGrid}>
            <div className={styles.mainImage}style={{height: "50%"}}>
                <div className="slide-container" >
                    <Zoom {...zoomOutProperties}>
                        {images.map((each, index) => (
                            <img key={index} style={{ width: "100%" }} src={each} />
                        ))}
                    </Zoom>
                </div>
            </div>
            <div className={styles.undersideGrid1}>

            </div>
            <div className={styles.gridRight}>
                <h2>{name}</h2>
                <div className={styles.price}>
                    <h3>{price}kr</h3>
                </div>
                <h3>Sizes:</h3>
                <div className={styles.sizes}>
                    <button>38</button>
                    <button>39</button>
                    <button>40</button>
                    <button>42</button>
                    <button>44</button>
                    <button>45.5</button>
                    <button>47</button>
                </div>
                <button className={styles.btn}   onClick={() => addToCart(id)} >ADD TO CART</button>
                <h3>Information about the product</h3>
                <p>{description}</p>
                <hr />
                <div className={styles.footerMini}>
                    <h3>Color</h3>
                    <h3>{colorway}</h3>
                </div>
                <div className={styles.footerMini}>
                    <h3>Article no.</h3>
                    <h3>{articleno}</h3>
                </div>
            </div>
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
  


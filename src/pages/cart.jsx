import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Sneaker } from "../models/sneaker";
import { CartItem } from "../components/CartItem";
import styles from "../components/cartItem.module.css";
import { Link } from "react-router-dom";


export default function Cart() {
    //sets the state for sneakers as an empty array (find out why states are nesecary)
    const [sneakers, setSneakers] = useState([])

    const [loading, setLoading] = useState(true)

    //this is run after the page is rendered
    const cartJSON = sessionStorage.getItem("cart");

    let ids = [];
    if (cartJSON) ids = JSON.parse(cartJSON);

    console.debug(ids)
    useEffect(() => {
        // An array where all "promises" will go
        const tasks = []
        ids.forEach(id => tasks.push(Sneaker.findById(id)))
        // Resolve all promises at the same time and set the sneakers to `setSneakers`
        Promise.all(tasks).then(setSneakers);

        setLoading(false);
        console.debug(tasks)
        console.debug(sneakers)



    }, [])

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(sneakers.map(sneaker => sneaker.id)))
    }, [sneakers]);

    return (
        <div>
            {/* <h1>{sneaker && sneaker.name}</h1> */}
            {/* if state loading = true then do <p>loading</p> */}
            {loading ? (
                <p>Loading...</p>
            ) : sneakers ? (
                <div className={styles.container}>

                    {sneakers.map((sneaker) => <CartItem key={sneaker.id} {...sneaker} setSneakers={setSneakers} sneakers={sneakers} />)} 
                    
                    <h2>Pris 1000</h2> {/* maybe this isn't a good idea  */}
                    <Link  to="/checkout" >Go To Payment</Link>
                    
                    </div>
    ) : (
        //else displays that
        <p>No sneakers found</p>
    )
}
        </div >
    );
}

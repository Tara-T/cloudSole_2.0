import React from "react";
import styles from "./cartItem.module.css"

export function CartItem({
    id,
    name,
    price,
    picture,
    sneakers,
    setSneakers
}) {
    return (
        <div className={styles.cartPage} > {/* do grid not table */}
            <table>
                <tr>
                    <th>Product</th>
                    <th>Subtotal</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td>
                        <div className={styles.cartInfo}>
                            <img src={`/main/${picture}`} />
                            <div className={styles.shoe}>
                                <h3>{name}</h3>
                                <button onClick={() => setSneakers(sneakers.filter(sneaker => sneaker.id !== id))} style={{ backgroundColor: "red" }} >Delete</button>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" min="1" max="5" value="1"/></td>
                    <td><h4>{price} kr</h4></td>
                </tr>
            </table>
            
            <div className={styles.totalPrice}>
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>{price} kr</td>
                        <td>Shipping</td>

                        <td>Free</td>


                    </tr>
                </table>
            </div>

        </div>
    )
}

/* function RemoveFromCart(idItem) {
    sessionStorage.removeItem(idItem, "cart");

} */
import React from "react"
import styles from "./checkout.module.css"

export default function Checkout() {
    return (
        <section className={styles.checkout}>

            <div className={styles.row}>
                <div className={styles.col75}>
                    <div className={styles.container}>
                        <form onSubmit={() => alert("Payment complete")}>

                            <div className={styles.row}>
                                <div className={styles.col50}>
                                    <h3>Billing Address</h3>
                                    <label className={styles.checkoutLabel} htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" required />
                                    <label className={styles.checkoutLabel} htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                                    <input type="email" id="email" name="email" placeholder="john@example.com" required />
                                    <label className={styles.checkoutLabel} htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" required />
                                    <label className={styles.checkoutLabel}  htmlFor="city"><i className="fa fa-institution"></i> City</label>
                                    <input type="text" id="city" name="city" placeholder="Oslo" required  />

                                    <div className={styles.row}>
                                        <div className={styles.col50}>
                                            <label className={styles.checkoutLabel} htmlFor="state">Area</label>
                                            <input type="text" id="state" name="state" placeholder="Asker" required />
                                        </div>
                                        <div className={styles.col50}>
                                            <label className={styles.checkoutLabel} htmlFor="zip">Zip</label>
                                            <input type="tel" inputMode="numeric" pattern="[0-9\s]{4}" id="zip" name="zip" placeholder="1111" required />
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.col50}>
                                    <h3>Payment</h3>
                                    <label className={styles.checkoutLabel} htmlFor="fname">Accepted Cards</label>
                                    <div className={styles.iconContainer}>
                                        <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                                        <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                                        <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                                        <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
                                    </div>
                                    <label className={styles.checkoutLabel} htmlFor="cname">Name on Card</label>
                                    <input type="text" id="cname" name="cardname" placeholder="John More Doe" required />
                                    <label className={styles.checkoutLabel} htmlFor="ccnum">Credit card number</label>
                                    <input type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx" required  />
                                    <label className={styles.checkoutLabel} htmlFor="expmonth">Exp Month</label>
                                    <input type="month" id="expmonth" name="expmonth" placeholder="September" required  />

                                    <div className={styles.row}>
                                        <div className={styles.col50}>
                                            <label className={styles.checkoutLabel} htmlFor="expyear">Exp Year</label>
                                            <input type="tel" inputMode="numeric" pattern="[0-9\s]{4}" name="expyear" placeholder="2018" required  />
                                        </div>
                                        <div className={styles.col50}>
                                            <label className={styles.checkoutLabel} htmlFor="cvv">CVV</label>
                                            <input type="tel" inputMode="numeric" pattern="[0-9\s]{3}" name="cvv" placeholder="xxx" required  />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                            <input type="submit" value="Continue to checkout" className="btn" />
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}
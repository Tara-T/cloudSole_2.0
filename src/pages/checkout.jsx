import React from "react"

export default function Checkout() {
    return (
        <section id="secCart">


            <h3>Billing Address</h3>
            <htmlForm /* onsubmit="kjopSneakers(event)"  */>
                <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="john@example.com" />

                <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />

                <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                <input type="text" id="city" name="city" placeholder="New York" />

                <label htmlFor="zip">Post number</label>
                <input type="text" id="zip" name="zip" placeholder="10001" />



                <h3>Payment</h3>
                <div>
                    <label htmlFor="fname">Accepted Cards</label>
                    <div className="icon-container">
                        <i className="fa fa-cc-visa" aria-hidden="true"/*  style="color:navy;" */></i>
                        <i className="fa fa-cc-amex" /* style="color:blue;" */></i>
                        <i className="fa fa-cc-mastercard" /* style="color:red;" */></i>
                        <i className="fa fa-cc-discover" /* style="color:orange;" */></i>

                    </div>

                    <label htmlFor="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="John More Doe" />


                    <label htmlFor="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />


                    <label htmlFor="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" placeholder="September" />

                    <label htmlFor="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2018" />

                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352" />




                    <input type="checkbox" checked="checked" name="sameadr" /></div>




                <button type="submit" className="btn3">Submit</button>
            </htmlForm>
        </section>
    )
}
import styles from "../components/nav.module.css"
/* needs a better name */
import indexStyles from "./indexStyles.module.css"
import { Link } from "react-router-dom";
import React from "react";

import frontPage from "../pictures/frontpage.jpg"
import rainbowShoes from "../pictures/rainbowShoes.png"


export default function Index() {
    return (
        /* TODO: remove the extra nav, somehow :/*/
        
        <div>
        <header>
            <section id={indexStyles.start}>
                <img id="front-page" src={frontPage} alt="Cloud background with the logo" />
                <div id={indexStyles.cover}>
                    <form /* onSubmit={return false} */> {/* onSubmit is weird with returns i'm probably missing something */}
                    {/* why is the div class named tb with styling diplay:table when it could have just been a tb element */}
                        <div className={indexStyles.tb}>
                            {/* and then there is a class name td with table cell display D: */}
                            <div className={indexStyles.td}>
                                <input type="text" placeholder="Search" id="searchbox" required autoComplete="off" />
                            </div>
                            <div className={indexStyles.td} id={indexStyles.sCover}>
                                <button type="submit">
                                    <div id={indexStyles.sCircle}></div>
                                    <span></span>
                                </button>
                            </div>
                            <div id={indexStyles.searchresults}></div>
                        </div>
                    </form>
                </div>
            </section>
            <nav className={indexStyles.flexContainer}> {/* this nav should replace the default nav */}
                <NavItem name="New Arrivals" to="/new" />
                <NavItem name="Adidas" to="/adidas" />
                <NavItem name="Jordan" to="/jordan" />
                <NavItem name="Vans" to="/vans" />
                <NavItem name="Nike" to="/nike" />
                <NavItem name="Nike Dunk" to="/nike-dunk" />
                <a id="cslink" href="cart-wishlist.html"> {/* <i className="material-icons"
                    style="font-size:40px;color:#3de1b3;">shopping_basket</i> */}</a>
                <label className={styles.switch}>
                    <input type="checkbox" id={styles.colorPreferance} />
                    <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
            </nav>
        </header>
        <main>
        <section /* id="just-in" this is useless*/>
          <img id={indexStyles.realise} src={rainbowShoes} alt="Nike dunk pastel" />
          <div id={indexStyles.textFp}>
            <h2>JUST IN: WOMEN'S NIKE DUNK LOW "LIGHT SOFT PINK"</h2>
            <p>
              A bold Women's Dunk has just arrived at Cloud Sole - This edition
              combines multiple shades all in one silouette for a sneaker you could
              pair with any spring outfit you want to throw at it. Featuring white
              leather on the toes, sides, and ankles, the set arrives mismatched
              with the left and right featuring the same colors but just at
              different locations. Pink, mint, purple, yellow, blue, and green are
              all used throughout the overlays, branding, and sockliner, while a
              white outsole and matching yellow outsoles are placed at the bottoms.!
            </p>
            <Link id={indexStyles.clickHere}  to="./easter"  /* TODO: later */>Click here to buy</Link>
          </div>
          <h2>Recommended</h2>
          <section className={indexStyles.recommended}></section>
        </section>
        <div id={indexStyles.recTitle}></div>
      </main>
    </div>

    )
}

function NavItem({ name, to }) {
    return (
        <Link className={styles.navLink} to={to}>{name}</Link>
    );
}


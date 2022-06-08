import styles from "../components/nav.module.css";
/* needs a better name */
import indexStyles from "./indexStyles.module.css";
import { Link } from "react-router-dom";
import React from "react";


export default function Index() {
  return (
    /* TODO: remove the extra nav, somehow :/*/

    <div>
      <header>
        <section id={indexStyles.start}>
          <img
            id="front-page"
            src={"/frontpage.jpg"}
            alt="Cloud background with the logo"
          />
          <div id={indexStyles.cover}>
            <form className={indexStyles.form}/* onSubmit={return false} */>
              <tb>
                <td>
                  <input
                    type="text"
                    placeholder="Search"
                    id={indexStyles.searchbox}
                    required
                    autoComplete="off"
                  />
                </td>
                <td id={indexStyles.sCover}>
                  <button className={indexStyles.btn} type="submit">
                    <div id={indexStyles.sCircle}></div>
                    <span></span>
                  </button>
                </td>
                <div id={indexStyles.searchresults}></div>
              </tb>
            </form>
          </div>
        </section>
        <nav className={indexStyles.flexContainer}>
          {/* this nav should replace the default nav */}
          <NavItem name="New Arrivals" to="/new" />
          <NavItem name="Adidas" to="/brand/adidas" />
          <NavItem name="Jordan" to="/brand/jordan" />
          <NavItem name="Vans" to="/brand/vans" />
          <NavItem name="Nike" to="/brand/nike" />
          <NavItem name="Nike Dunk" to="/brand/nike-dunk" />
          <Link id="cslink" to="cart">
            <i className="material-icons" id={styles.shoppingIcon}>shopping_basket</i>
          </Link>
        </nav>
      </header>
      <main>
        <section /* id="just-in" */>
          <img
            id={indexStyles.realise}
            src={"/rainbowShoes.png"}
            alt="Nike dunk pastel"
          />
          <div id={indexStyles.textFp}>
            <h2>JUST IN: WOMEN'S NIKE DUNK LOW "LIGHT SOFT PINK"</h2>
            <p>
              A bold Women's Dunk has just arrived at Cloud Sole - This edition
              combines multiple shades all in one silouette for a sneaker you
              could pair with any spring outfit you want to throw at it.
              Featuring white leather on the toes, sides, and ankles, the set
              arrives mismatched with the left and right featuring the same
              colors but just at different locations. Pink, mint, purple,
              yellow, blue, and green are all used throughout the overlays,
              branding, and sockliner, while a white outsole and matching yellow
              outsoles are placed at the bottoms.!
            </p>
            <Link id={indexStyles.clickHere} to="/shoe/s032">
              Click here to buy
            </Link>
          </div>
          <h2>Recommended</h2>
          <section className={indexStyles.recommended}></section>
        </section>
        <div id={indexStyles.recTitle}></div>
      </main>
    </div>
  );
}

function NavItem({ name, to }) {
  return (
    <Link className={styles.navLink} to={to}>
      {name}
    </Link>
  );
}

/* document.querySelector("#searchbox").addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase();
  let results = [];
  let output = "";

  for (let i = 0, len = allSneakers.length; i < len; i++) {
    if (searchValue && allSneakers[i].name.toLowerCase().trim().includes(searchValue)) results.push(allSneakers[i]);
  }

  for (let i = 0, len = results.length; i < len; i++) {
    output += `
      <h1>${results[i].name}</h1>
      <br />
    `;
  }

  console.log(output)

  searchResults.innerHTML = output;

}) */

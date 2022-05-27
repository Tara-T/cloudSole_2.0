import styles from "./footer.module.css";
import React from "react";
import { Link } from "react-router-dom";

import facebook from "../public/fb2.png";
import pinterest from "../public/pinterest2.png";
import instagram from "../public/insta2.png";

export default function Footer() {
	return (
		<footer>
			<div className={styles.flexfooter}>
				<div className={styles.words}>
					<h3>About</h3>
				</div>
				<div className={styles.words}>
					<h3>Socials</h3>
				</div>
			</div>
			<div className={styles.flex}>
				<div className={styles.parfooter}>
					<p>
						{" "}
						Cloud sole is the most kawaii pastel themed sneaker shop on the
						internet.
					</p>
					<p>
						{" "}
						We have a wide assortment of sneakers from the most basic Nikesb
						Stefan Janoski black and white to Nikedunk Jeff Staple pigeons that
						there were only 150 paris ever made.
					</p>
					<p>
						{" "}
						We offer a gread deal of very unique pairs of snekers of which many
						are collaboration between other companies and designers.
					</p>
				</div>

				<div className={styles.socials}>
					<SocialsItem
						to="https://www.facebook.com/nike"
						src={facebook}
						alt="Facebook pastel icon"
					/>
					<SocialsItem
						to="https://www.pinterest.com/sianaakim/pastel-streetwear/"
						src={pinterest}
						alt="Pinterest pastel icon"
					/>
					<SocialsItem
						to="https://www.instagram.com/_trobos_/"
						src={instagram}
						alt="Instagram pastel icon"
					/>
				</div>
			</div>
		</footer>
	);
}

function SocialsItem({ to, src, alt }) {
	return (
		<div>
			<Link to={to}>
				<img src={src} alt={alt} />
			</Link>
		</div>
	);
}

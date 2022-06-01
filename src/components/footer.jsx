import React from "react";
// import css 
import styles from "./footer.module.css";

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

						Cloud sole is the most kawaii pastel themed sneaker shop on the
						internet.
					</p>
					<p>

						We have a wide assortment of sneakers from the most basic Nikesb
						Stefan Janoski black and white to Nikedunk Jeff Staple pigeons that
						there were only 150 paris ever made.
					</p>
					<p>

						We offer a gread deal of very unique pairs of snekers of which many
						are collaboration between other companies and designers.
					</p>
				</div>

				<div className={styles.socials}>
					<SocialsItem
						href="https://www.facebook.com/nike"
						src={"/fb2.png"}
						alt="Facebook pastel icon"
					/>
					<SocialsItem
						href="https://www.pinterest.com/phienterest/sneakers/"
						src={"/pinterest2.png"}
						alt="Pinterest pastel icon"
					/>
					<SocialsItem
						href="https://www.instagram.com/nike/"
						src={"/insta2.png"}
						alt="Instagram pastel icon"
					/>
				</div>
			</div>
		</footer>
	);
}
// make a template for footer links 
function SocialsItem({ href, src, alt }) {
	return (
		<div>
			<a href={href}>
				<img src={src} alt={alt} />
			</a>
		</div>
	);
}

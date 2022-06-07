//imports
//import utilsStyles from "./components/utils.module.css";
import { Route, Routes, useLocation } from "react-router-dom";
// my pages
import Index from "./pages/index";
import New from "./pages/new";
import Brand from "./pages/brand/[brand]";
import Shoe from "./pages/shoe/[shoe]";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import Cart from "./pages/cart"
import Checkout from "./pages/checkout"


import React, { useState, useEffect } from "react";

function App() {
	// sets hideNavBar state (states "save" data between function calls)
	const [hideNavBar, setHideNavBar] = useState(false);

	const { pathname } = useLocation();

	useEffect(() => {
			// Hide the navbar on the index page
			if (pathname === "/") {
				setHideNavBar(true);
			}
			else {
				setHideNavBar(false);
			}
			// checks every time a button is clicked
	}, [pathname, setHideNavBar]);

	return (
		<>
			{
				hideNavBar ? 
					"" : 
					<Navbar />
			}
			<div /*  className={utilsStyles.container}*/>
				{/* im guseing routes just is just a container for several route(s) */}
				<Routes>
					{/* renders the files */}
					<Route path="/" element={<Index />} />
					<Route path="/new" element={<New />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/brand/:brand" element={<Brand />} />
					<Route path="/shoe/:shoe" element={<Shoe />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}
//exports it to be used elsewhere
export default App;

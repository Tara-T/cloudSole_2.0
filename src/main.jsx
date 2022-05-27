// imports all things needed
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./main.css";

//renders things in place of #root
ReactDOM.createRoot(document.getElementById("root")).render(
	// aditional checks and warnings
	<React.StrictMode>
		{/* keeps the UI in sync with URL  (whatever that means)*/}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

//imports
//import utilsStyles from "./components/utils.module.css";
import { Route, Routes } from "react-router-dom";
// my pages
import Index from "./pages/index";
import New from "./pages/new";
import Brand from "./pages/[brand]";
import Shoe from "./pages/[shoe]";
import Navbar from "./components/nav";
import Footer from "./components/footer"

// doesn't work without this and i don't know why 
// it was supposed to be imported in the main.jsx file and now it has to be imported everywhere
import React from "react";

function App() {
    return (
        <>
            <Navbar />
            {/* uses the css in utilis.module.css (does it have to be called like that?) and what does it do and why */}
            <div /*  className={utilsStyles.container}*/>
                {/* im guseing routes just is just a container for several route(s) */}
                <Routes>
                    {/* renders the files */}
                    <Route path="/" element={<Index />} />
                    <Route path="/new" element={<New />} />
                    <Route path="/:brand" element={<Brand />} />
                    <Route path="/:shoe" element={<Shoe />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}
//exports it to be used elsewhere
export default App;

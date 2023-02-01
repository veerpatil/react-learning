import React from "react";
import NavBar from "./Navbar"

import HeroSection from "./HeroSection";
import CardSection from "./CardSection";
import AppSection from "./AppSection";
import Footer from "./Footer";
const App = () =>{
    return(
        <div>
            <NavBar/>
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>
        </div>
    )
}

export default App;
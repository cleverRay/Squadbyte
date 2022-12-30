import React from "react";
import MainContent from "../MainContent";
import Footer from "../Footer";
import Navbar from "../Navbar"




function Homepage(props) {
    return(
        <div>
            <Navbar/>
            <MainContent PricingStorage={props.PricingStorage}
                          handleCategory={props.handleCategory}/>
            <Footer/>


        </div>
    )
}
export default Homepage;
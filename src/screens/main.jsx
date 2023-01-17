import Categories from "../components/categories";
import WrapperCards from "../components/wrappercards";
import NavReg from "../components/navreg";

import NavNoReg from "../components/navbar.jsx";
import { useState } from "react";
import CardsPost from "../components/cardpost";
import Navbar from "../components/navbar.jsx";


// COMPONENTS






const Main = () => {
    
    return (
        <div>
            <div className="container">
                <div className="wrapper">
                    <Navbar/>
                    <Categories />
                    <WrapperCards />
                </div>
            </div>
        </div>
    )
}

export default Main;
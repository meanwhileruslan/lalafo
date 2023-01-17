import React from "react";

import MenuProfile from "../components/menuprofile";
import Navbar from "../components/navbar";
import ContentPromocode from "../components/promocode";



const EffectPage = () =>{
    return(
        <div className="section_effectPage">

            <Navbar/>
            <ContentPromocode/>
            <MenuProfile props={5}/>

        </div>
    );
}

export default EffectPage;
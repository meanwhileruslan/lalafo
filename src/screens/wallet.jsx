
import React from "react";
import MenuProfile from "../components/menuprofile";
import Navbar from "../components/navbar";
import ContentPromocode from "../components/promocode";



const WalletPage = () => {
    return (
        <div className="section_walletPage">
            <Navbar/>
            <ContentPromocode/>
            <MenuProfile props={3}/>
        </div>
    );
}

export default WalletPage;
import React from "react";
import { Menu, } from "antd";
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Routes,
} from 'react-router-dom';

// import MyAds from "../screens/myads";
// import Message from "../screens/message";
// import Wallet from "../screens/wallet";
// import EffectPage from "../screens/effect";
// import SettingProfile from "../screens/settingprofile";
// import WalletPage from "../screens/wallet";


const MenuSecond = () => {
    return (
        <div className="section_menuProfile mb-5">
            <div className="container">

                <Menu className="my_ads_menu_second  flex-start"
                    style={{
                        // border: "1px solid #dfdfdfa6",
                        marginTop: "10px"
                    }} mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"  >
                        <Link className = "my_ads_menu_second_item" to="#">
                            Активно
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link className = "my_ads_menu_second_item" to="#">
                            Ожидают оплату
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" >
                        <Link className = "my_ads_menu_second_item" to="#">
                            На модерации
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link className = "my_ads_menu_second_item" to="#">
                            Деактивировано
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5" >
                        <Link className = "my_ads_menu_second_item" to="#">
                            Отклонено
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
}
export default MenuSecond;
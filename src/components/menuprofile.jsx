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


const MenuProfile = ({ props }) => {
    console.log('props', props)
    return (
        <div className="section_menuProfile">
            <div className="content_my_ads_menu">
                <Menu className="my_ads_menu"
                    style={{
                        border: "1px solid #dfdfdfa6",
                        marginTop: "10px",
                    }}
                    mode="horizontal"
                    defaultSelectedKeys={[props + '']}>
                    <Menu.Item key="1"  >
                        <Link className = "my_ads_menu_item" to="/myads">
                            Мои объявления
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link className = "my_ads_menu_item" to="/message">
                            Сообщения
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" >
                        <Link className = "my_ads_menu_item" to="/wallet">
                            Кошелек
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link className = "my_ads_menu_item" to="/settingprofile">
                            Настройки профиля
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5" >
                        <Link className = "my_ads_menu_item" to="/effect">
                            Эффективность
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6" >
                        <Link className = "my_ads_menu_item" to="#">
                            Улучшить профиль
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
}
export default MenuProfile;
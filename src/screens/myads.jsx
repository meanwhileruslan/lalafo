import { useState, useEffect } from "react";
import { Card, Space, Typography, Switch, Skeleton, } from 'antd';
import MenuProfile from "../components/menuprofile";
import ContentPromocode from "../components/promocode";
import Navbar from "../components/navbar";
import { posts, users, } from '../screens/api';
// import {  } from "react";
import MenuSecond from "../components/menusecond";
import 'bootstrap/dist/css/bootstrap.min.css';
import { EditOutlined, CloseOutlined, MailOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;



const MyAds = () => {
    const [userid, setUserid] = useState(null);
    const [publics, setPublics] = useState(null);

    const User = () => {
        const userToken = localStorage.getItem("token");
        // console.log('token', userToken);
        const userDetail = users.filter(item => item.token == userToken);
        setUserid(userDetail[0].id);
        console.log('user', userDetail);
        // console.log('user0', userDetail[0]);
    }
    if (publics == null) {
        if (userid != null) {
            const post = posts.filter(i => i.post_user_id == userid);
            setPublics(post);
            // console.log('posts',post)
        }
    }
    console.log("User", publics);
    useEffect(() => {
        User();
    }, [])

    return (
        <div className="container">
        <div className="section_myads"
            style={{ backgroundColor: "#ffff" }}>
            <Navbar />
            <ContentPromocode />
            


                <div className="menuprofile mt-5">
                    <MenuProfile props={1} />
                </div>
                <div className="container p-0 mt-2"
                    style={{
                        border: "1px solid #dfdfdfa6",
                        borderRadius: "15px",
                    }}>
                    <MenuSecond />
                    <div className="content_my_ads">
                        {publics != null ?
                            <>{publics.map((i) =>
                                <a href={"/postview/" + i.id} className="card my_card mb-3"
                                    style={{
                                        height: "150px",
                                        width: "550px"
                                    }}>
                                    <div className="row g-0">
                                        <div className="my_card_img col-md-4">
                                            <img src={i.imgPost}
                                                className="item_my_card_img img-fluid rounded-start" alt="..."
                                                style={{ height: "150px" }}
                                                href={"/postview/" + i.id} />
                                        </div>
                                        <div className="col-md-4 col-xs-8">
                                            <div className="card-body">
                                                <Text className="old-price text-start d-block" delete>
                                                    {i.oldPricePost}
                                                </Text>
                                                <a href="#" style={{ textDecoration: "none" }}>
                                                    <b className="new-price text-start d-block">
                                                        {i.newPricePost}
                                                    </b>
                                                </a>

                                                <p className='name_post_my text-card text-start'
                                                    href={"/postview/" + i.id}>
                                                    {i.namePost}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 content_edit_card d-flex align-items-center">
                                            <div className="edit_card d-block">
                                                <a className="d-flex align-items-center item_edit_card d-block d-flex flex-start" href="#">
                                                    <EditOutlined style={{ marginRight: "7px", color: "gray" }} /> Редактировать
                                                </a>
                                                <a className="d-flex align-items-center item_remove_card d-block d-flex flex-start" href="#">
                                                    <CloseOutlined style={{ marginRight: "7px", color: "gray" }} /> Деактивироавть
                                                </a>
                                                <a className="d-flex align-items-center item_reply_card d-block d-flex flex-start" href="#">
                                                    <MailOutlined style={{ marginRight: "7px", color: "gray" }} />Ответить
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                            }
                            </>
                            :
                            <>
                                <Skeleton />
                            </>
                        }
                    </div>
                </div>
            </div >
        </div>
    );
}

export default MyAds;
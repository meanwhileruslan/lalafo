
import Navbar from "../components/navbar";
import React from 'react';
import { useState, useEffect } from 'react';
import { categoryMenu, posts, users } from "./api";
import { useParams } from "react-router-dom";
import { Card, Typography, Skeleton } from 'antd';

const { Text, Link } = Typography;
const { Meta } = Card;



const MorePostsUser = () => {
    const params = useParams();
    const postId = params.id;
    const [products, setProducts] = useState(null);
    const [userid, setUserid] = useState();
    const [user, setUser] = useState(null);

    const postFuncton = () => {
        const post = posts.filter(i => i.post_user_id == postId);
        setProducts(post);

        const userDetail = post[0].post_user_id;
        setUserid(userDetail);
        setUser(users.filter(i => i.id == userDetail));
    }


    console.log("userid", user);
    useEffect(() => {
        postFuncton();
    }, []);
    return (
        <div className="container">
            <Navbar />
            <div className="container content_user">
                {user?.length > 0 ?
                    <div className="row">
                        <div className="user_item col-md-6 align-items-center">
                            <a href={"/morepostsusers/" + userid}><img className="user_avatar" src={user[0].avatar} alt="" /></a>
                            <small className="user_small_text">
                                Был(a) в сети 3 ч. назад<br />
                                На lalafo с {user[0].active_date}
                            </small>
                        </div>
                        <small className="col-md-6">

                        </small>
                    </div>
                    : <>
                    </>
                }
            </div>
            {
                products != null ?
                    <>
                        <div className="section_cards d-flex justify-content-center">
                            {
                                products.map((i) =>
                                    <div className="cards">
                                        <a className='toViewScreen' href={"/postview/" + i.id}>
                                            <Card className="card_business_link m-1"
                                                hoverable
                                                style={{
                                                    width: 220,
                                                    padding: 10
                                                }}
                                                cover={<img className="imgcard" src={i.imgPost} />}>
                                                <Text className="name_post text-start d-block" >{i.namePost}</Text>
                                                <hr />
                                                <Text className="old-price text-start d-block" delete>{i.oldPricePost}</Text>
                                                <Text className="new-price text-start d-block" strong>{i.newPricePost}</Text>
                                                {/* {typeCategory.map((i) =>
                                                <>
                                                    <b>{i.title}</b>
                                                </>)} */}
                                            </Card>
                                        </a>
                                    </div>
                                )}
                        </div>
                    </>
                    : <><Skeleton /></>
            }
        </div >

    )
}



export default MorePostsUser;
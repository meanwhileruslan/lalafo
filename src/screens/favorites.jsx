
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { users, posts, favorites } from "./api";
import { Card, Typography, Skeleton } from 'antd';

const { Text, Link } = Typography;
const { Meta } = Card;


const Favorites = () => {
    const params = useParams();
    const params_post_id = params.id;
    // const [fovarite_post, setFovarite_post] = useState();
    const [user, setUser] = useState();

    const user_in_localStorage = localStorage.getItem("token");
    const user_enter = users.filter(item => item.token == user_in_localStorage);

    const favorite = favorites.filter(i => i.user_id = user_enter);
    // const favorite_post = posts.filter(i => i.)
    console.log("token", favorite[0]);


    return (
        <div className="section_favorites">
            <div className="container">
                <Navbar />
                <div className="content_favorites d-flex">
                    {
                        favorite.map((favorite_post) =>

                            <div className="cards">
                                <a className='toViewScreen' href={"/postview/" + favorite_post.post_id }>
                                    <Card className="card_business_link m-1"
                                        hoverable
                                        style={{
                                            width: 220,
                                            padding: 10
                                        }}
                                        cover={<img className="imgcard" src={favorite_post.post_img} />}>
                                        <Text className="name_post text-start d-block" >{favorite_post.post_name}</Text>
                                        <hr />
                                        <Text className="old-price text-start d-block" delete>{favorite_post.post_OldPrice}</Text>
                                        <Text className="new-price text-start d-block" strong>{favorite_post.post_NewPrice}</Text>

                                    </Card>
                                </a>
                            </div>
                        )}

                </div>
            </div>

        </div>
    );

}

export default Favorites;
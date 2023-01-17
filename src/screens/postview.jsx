import Navbar from "../components/navbar";
import { Avatar, Button, Comment, Form, Input, List, Card } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
// import CardsAdvert from "../components/cardadvert";
import CardsPost from "../components/cardpost";
import { useParams } from "react-router-dom";
import { posts, users } from "./api";
import { useEffect } from "react";
import MorePostsUser from "./morepostsusers";
const { TextArea } = Input;



const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea placeholder="Сообщение" rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <button className="btn" style={{
                backgroundColor: "#22ca46",
                color: "white",
                textWeight: "bold",
                width: "100%"
            }}
                htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Отправить
            </button>
        </Form.Item>
    </>
);

const PostView = () => {
    const params = useParams();
    const postId = params.id;
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const [userid, setUserid] = useState();
    const [user, setUser] = useState(null);
    const [resultPosts, setResultposts] = useState(null);

    const [userDetailsName, setUserDetailsName] = useState();

    // const token = localStorage.getItem('token');
    // const userDetail = users.filter(item => item.token == token);
    // setUserDetailsName(userDetail);
    // console.log("userName", userDetailsName);

    const handleSubmit = () => {
        if (!value) return;
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            setComments([
                ...comments,
                {
                    author: "Name",
                    avatar: 'http://img2.joyreactor.cc/pics/post/full/Crash-Bandicoot-Игры-Игровой-арт-rainsy-6512514.jpeg',
                    content: <p>{value}</p>,
                    datetime: moment('').fromNow(),
                },
            ]);
        }, 1000);
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const userDetails = () => {
        const post = posts.filter(item => item.id == postId);
        setResultposts(post)
        const userDetail = post[0].post_user_id;
        setUserid(userDetail);
        setUser(users.filter(i => i.id == userDetail));
    }
    console.log('user', user);
    console.log(resultPosts);
    useEffect(() => {
        userDetails();
    }, [])
    // console.log(user);
    return (
        <div className="container">
            <div className="section_postview">
                <Navbar />
                <div class="row content_postview justify-content-center align-items-start g-2">
                    <div class="col-md-8">
                        <div className="content_img_view">
                            <div className="site-card-border-less-wrapper">
                                <Card
                                    bordered={false}
                                    style={{
                                        width: "100%",
                                        backgroundColor: "#f3f3f3"
                                    }}

                                    cover={<img alt="example" src={resultPosts != null ? resultPosts[0].imgPost : ""}
                                        style={{
                                            width: "100%",
                                            cobjectFit: "cover",
                                            height: "450px"
                                        }} />}

                                >  {user?.length > 0 ?
                                    <div className="card-body p-1">
                                        <div className="card-chat align-items-center d-flex justify-content-between"
                                            style={{
                                                backgroundColor: "#ababab",
                                                padding: "15px",
                                                borderRadius: "15px"
                                            }}>
                                            <a href={"/morepostsusers/" + userid}
                                                className="card-chat_user d-flex align-items-center p-2">
                                                <img src={user[0].avatar}
                                                    style={{
                                                        width: "30px",
                                                        height: "30px",
                                                        borderRadius: "50%"
                                                    }} alt="" />
                                                <h6 className="user_name p-2"
                                                    style={{
                                                        textDecoration: "none",
                                                        color: '#fff',
                                                        fontSize: "17px"
                                                    }}>
                                                    {user[0].user_name}
                                                </h6>
                                            </a>
                                            <div className="card-chat_sendMessage d-block">
                                                <button className="btn"
                                                    style={{
                                                        width: "100%",
                                                        backgroundColor: "#ff2366",
                                                        color: "#fff"
                                                    }}>Написать</button>
                                                <h6 className="card-chat_call mt-1">
                                                    {user[0].user_number}
                                                </h6>
                                            </div>
                                        </div>

                                        <p className="card-text mt-2"
                                            style={
                                                {
                                                    fontSize: "15px",
                                                    textAlign: "left",
                                                    wordBreak: "break-word"
                                                }
                                            }>
                                            {resultPosts[0].namePost}
                                        </p>
                                    </div>
                                    :
                                    <></>
                                    }
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div className="content_chat_view">
                            <h4 className="card-chat_call mt-1">
                                {resultPosts ?
                                    <b>{resultPosts[0].newPricePost}</b>
                                    :
                                    <></>
                                }
                            </h4>
                            <Card>
                                <div data-bs-spy="scroll">
                                    {comments.length > 0 && <CommentList comments={comments} />}
                                    <Comment
                                        avatar={<Avatar src="http://img2.safereactor.cc/pics/post/full/Crash-Bandicoot-Игры-Игровой-арт-rainsy-6512514.jpeg" alt="Клиент" />}
                                        content={
                                            <Editor
                                                onChange={handleChange}
                                                onSubmit={handleSubmit}
                                                submitting={submitting}
                                                value={value}
                                            />
                                        }
                                    />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                {/* <div className="content_recommended_ads">
                    <CardsAdvert />
                </div> */}

            </div>

        </div >




    );
}

export default PostView;
import { Card, Space, Typography, Switch } from 'antd';
import React from 'react';
import { HeartFilled, MailFilled } from '@ant-design/icons';
import { posts, users } from '../screens/api';

const { Text, Link } = Typography;

// const post_id = posts.filter(item => item.id == id)
// const user_id = users.filter(i => i.id = post_id);

const CardsPost = ({ content }) => {

    return (
        <div>
            <a className='toViewScreen' href={"/postview/" + content.id}>
                <Card className='card_business_link m-1'
                    hoverable
                    href="https://yandex.ru/search/?text=datetime%3A+moment(%27%27).fromNow()%2C+%D0%B2%D0%BE+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F+%D0%B2+react&clid=2270455&banerid=0500000134%3A62b6c1daf726bf001bd1aaf1&win=547&lr=10310"
                    style={{
                        width: 220,
                        padding: 10,

                    }}
                    cover={<img className='imgcard' alt=""
                        src={content.imgPost} />}
                >
                    <Text className="old-price text-start d-block" delete>{content.oldPricePost}</Text>
                    <Text className="new-price text-start d-block" strong>{content.newPricePost}</Text>
                    <p className='text-card text-start text_name_post'>{content.namePost}</p>

                    <div className="row">
                        <div className="col-md-6 align-items-center d-flex flex-start">
                            <div className="user_card_content">
                                {/* {
                                    user_id.map((item) =>
                                        <img src={item.avatar}                                            style={{
                                                borderRadius: "50%",
                                                height: "20px",
                                                width: "20px",
                                                border: "1px solid gray"
                                            }} />
                                    )
                                } */}

                            </div>

                        </div>
                        <div className="col-md-6 align-items-center d-flex  justify-content-between">
                            <div className='icons_card d-flex justify-content-between'>
                                <HeartFilled className='item_card_icon_like'>{content.likePost}</HeartFilled>
                                <MailFilled className='item_card_icon_mail'>{content.mailPost}</MailFilled>
                            </div>
                        </div>
                    </div>
                </Card>
            </a>
        </div>
    );
}

export default CardsPost;
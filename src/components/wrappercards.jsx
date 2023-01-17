



import { RightOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Card } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { posts, users, } from '../screens/api';
import CardsPost from './cardpost';
const { Meta } = Card;

//////////////////////////

const post = posts;


const businessProfile = users.filter(i => i.status == "business");
const regularPosts = posts.filter(item => item.business == null);

//////////////////////////


const WrapperCards = () => {
    return (
        <div className="container-fluid p-0">
            <div className="content_business_prof">
                <h5 className="header_text float-start">Бизнес-профили</h5>
                <NavLink
                    className='float-end'>
                    <Link to={"/viewallbusinessprofile/"} className='link_showAll d-flex align-items-baseline'>
                        Смотреть все
                        <RightOutlined />
                    </Link >
                </NavLink>
                <div className="content_cards mt-5 p-4">
                    <div className="cards_item">
                        {
                            businessProfile.map((profile) =>
                                <Card
                                    style={{
                                        width: 220,
                                        padding: 10,
                                        height: 350
                                    }}
                                    cover={<img alt="example" className='pr_banner'
                                        src={profile.business_profile[0].banner} />}>
                                    <a href={"/businessprofileview/" + profile.id}>
                                        < Meta title={profile.business_profile[0].business_name}
                                        />
                                        <Meta description={profile.business_profile[0].quantity_ads} />
                                    </a>
                                </Card>

                            )
                        }
                    </div>
                </div>
                <h5 className="header_text float-start">Новые объявления - Кыргызстан</h5>
                <div className="content_cards mt-3 p-4">
                    <div className="cards_item d-flex">
                        {
                            regularPosts.map((item) => <CardsPost content={item} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WrapperCards;
import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;





const BusinessProfile = ({ content }) => {
    // const user_business = filter(item => item.business_profile[0] == id);
    return (
        <div>
            <a className='title_business_profile' href={"/businessprofileview/"+content.id}>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={content.background} />}>
                    <Meta title={content.business_name} description={content.quantity_ads} />
            </Card>
            </a>
        </div>
    );
}

export default BusinessProfile;
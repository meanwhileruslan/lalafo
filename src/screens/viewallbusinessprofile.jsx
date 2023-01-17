
import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { posts, users } from "./api";
import { Card, Skeleton, } from "antd";
const { Meta } = Card;

const ViewAllBusinessProfile = () => {
    const businessProfiles = users.filter(item => item.status == "business");

    return (
        <div className="container">
            <Navbar />
            <div className="wrapper_content d-flex mt-5">
                {
                    businessProfiles.map((profile) =>
                        <Card
                            style={{
                                width: 220,
                                padding: 10,
                                margin: "5px"
                            }}
                            cover={<img alt="example" className='pr_banner'
                                src={profile.business_profile[0].banner} />}>
                            <a href={"/businessprofileview/" + profile.business_profile.id}>
                                < Meta title={profile.business_profile[0].business_name}
                                />
                                <Meta description={profile.business_profile[0].quantity_ads} />
                            </a>
                        </Card>
                    )
                }
            </div>
        </div>
    );
}

export default ViewAllBusinessProfile;
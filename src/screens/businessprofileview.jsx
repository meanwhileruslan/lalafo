import React from "react";
import { posts, users } from "./api";
///////////
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";

///////////

const PostViewPage = () => {
    const params = useParams();
    const profile_id = params.id;
    const result_profile = users.filter(i => i.id == profile_id);


    

    return (


        <div className="container">
            <Navbar />
            <div className="bs_pr_vw_pg">
                <div className="business_page_banner">
                    <img
                        src={result_profile[0].business_profile[0].banner}
                        alt=""
                    />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    className="bs_logo_profile"
                                    src={result_profile[0].business_profile[0].logotype}
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="text_detail_pr text-right">
                                    <h4
                                        className="title_business_profile">
                                        {result_profile[0].business_profile[0].business_name}
                                    </h4>
                                    <span className="span_text_pr text-left">
                                        Был(а) в сети 20 мин. назад<br />
                                        Не подтвержден<br />
                                        Отвечает на 85% сообщений
                                        Обычно в течение дня<br />
                                        На lalafo с 11.04.2018
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="contact_detail_pr text-left">
                            {result_profile[0].business_profile[0].number_business}<br />
                            <a href="#">Написать в WhatsApp</a><br />
                            {result_profile[0].business_profile[0].mail_business}<br />
                            {result_profile[0].business_profile[0].website_business}<br />
                        </div>
                    </div>

                </div>


            </div>
        </div>

    );

    

}

export default PostViewPage;

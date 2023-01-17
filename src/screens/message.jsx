import React from "react";
import { Button, Col, Input, Menu } from "antd";
import NavReg from "../components/navreg";
import MenuProfile from "../components/menuprofile";
import Navbar from "../components/navbar";
import { users } from "./api";


const user = users.filter(i=> i.balance);

const Message = () => {
    return (
        <div className="section_message">
            <Navbar />
            <div className="container">
                <div className="content_message mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="smallContentsMyads p-3">
                                <h5>
                                    <b>0</b>
                                    <br />
                                </h5>
                                <p>
                                    Используйте промокод и получите супербонусы от lalafo!
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="smallContentsMyads d-block p-3">
                                <p>
                                    Отдел продаж:
                                </p>
                                <a href="#">0555-55-55-55</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="smallContentsMyads d-flex p-3">
                                <div className="status_block">
                                    <p>
                                        Баланс кошелька:
                                    </p>
                                    <h6>{user.balance}</h6>
                                </div>
                                <div className="bbtn">
                                    <Button style={{ borderRadius: "10px", backgroundColor: "#22ca46", color: "#fff" }}>Пополнить</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuProfile props={2} />
            </div>
        </div>
    );
}

export default Message;
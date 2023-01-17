import { Button, Input, } from "antd";
import React from "react";

import { users } from "../screens/api";

const user = users.filter(i=> i.balance);


const ContentPromocode = () => {
    return (
        <div className="section_promocode mt-5">
            <div className="container">
                <div className="content_promocode">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="smallContentsPromocode p-3">
                                <h5>
                                    Активация промокода
                                </h5>
                                <p>
                                    Используйте промокод и получите супербонусы от lalafo!
                                </p>
                                <Input className="promocode d-flex" maxLength={6} placeholder="Введите промокода" />
                                <Button className="promocodebtn justify-content-center d-flex"
                                    style={{
                                        borderRadius: "10px",
                                        backgroundColor: "#22ca46",
                                        color: "#fff",
                                        width: "100%",
                                        marginTop: "5px"
                                    }}
                                >Активировать
                                </Button>


                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="smallContentsSupport d-block p-3">
                                <p>
                                    Служба поддержки lalafo
                                </p>
                                <a href="#">info@lalafo.kg</a>


                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="smallContentsMyads d-flex p-3">
                                <div className="status_block">
                                    <p>
                                        Баланс кошелька:
                                    </p>
                                    <h6>{user[0].balance}</h6>
                                </div>
                                <div className="bbtn">
                                    <Button
                                        style={{
                                            borderRadius: "10px",
                                            backgroundColor: "#22ca46",
                                            color: "#fff"
                                        }}>Пополнить</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentPromocode;
import axios from "axios";
import { useState } from "react";





const University = () => {

    const [univer, SetUniver] = useState([]);
    const [nameCountry, SetNameCountry] = useState();
    const Universites = async () => {
        const param = {
            country: nameCountry
        }
        const univer = await axios({
            method: "get",
            url: "http://universities.hipolabs.com/search",
            params: param
        })
        console.log("univerity", univer);
        if (univer.status == 200) {
            SetUniver(univer.data);
        } else {
            console.log("Ошибка", univer);
        }
    }
    return (
        <>

            <div className="container">
                <input type="text" onChange={(i) => { SetNameCountry(i.target.value) }} placeholder="" />
                <button className="btn" onClick={Universites}>Пуск</button>
            </div>
            {univer.length > 0 ?
                <>
                    {univer.map((item) =>

                        <div className="container">
                            {item.id}<br />
                            {item.alpha_two_code}<br />
                            <b>{item.name}</b>
                        </div>)}
                </>

                :
                <></>


            }
        </>
    );


}

export default University;
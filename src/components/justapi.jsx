import axios from "axios";
import { useState } from "react";




const JustAPI = () => {

    const [product, setProduct] = useState([]);
    const [name, setName] = useState();
    const fetchPorducts = async () => {

        const param = {
            name: name
        }
        const product = await axios({
            method: "get",
            url: "https://api.nationalize.io",
            params: param
        })
        console.log("error", product);
        if (product.status == 200) {
            setProduct(product.data.country);
        }
        else {
            console.log("error", product);
        }


    }
    console.log("product", product.length);

    return (
        <>
            <div className="form-control d-flex">
                <input type="text" onChange={(n) => { setName(n.target.value) }} placeholder="поиск..." />
                <button className="btn" onClick={fetchPorducts}>Показать</button>
            </div>
            {
                product.length > 0 ?
                    <>

                        {
                            product.map((item) =>
                                <>


                                    <p>{item.country_id}</p>
                                    <p>{item.probability}</p>

                                </>

                            )
                        }
                    </>
                    :
                    <p>Loading..</p>
            }
        </>
    );
}

export default JustAPI;
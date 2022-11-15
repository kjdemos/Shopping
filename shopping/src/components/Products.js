import React, {useState, useEffect} from "react";
import axios from 'axios';

function Products() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState ([]);

    useEffect (() => {
        setLoading(true)
        axios ({
            method:"GET",
            url: "https://fakestoreapi.com/products"
        })
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false))
    }, [])

    return (

        <div class="products-container container">
            {loading && (
                <div class="items-center">
                    {""}
                    <h3 class="text-muted">Loading...</h3>
                </div>
            )}
            {data.map((product) => (
                <div key={product.id} className= "">
                <div class="items-center"> <img src={product.image} alt="#" /> </div>
                <br />
                <div className="card-description card">
                    <p class="items-center lead">{product.title}</p>
                    <h6>{`£${product.price}`}</h6>
                    <div class="button">
                    <button type="button" class="btn btn-info btn-sm">Add to basket</button>
                    <button type="button" class="btn btn-outline-secondary btn-sm">Quick view</button>
                    </div>
                    {/* <h6>{`Description: ${product.description}`}</h6> */}
                    <br/>
                </div>
                </div>
            ))}
        </div>
    );
}
  
  export default Products;
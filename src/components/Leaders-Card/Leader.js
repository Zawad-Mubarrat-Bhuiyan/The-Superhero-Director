import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Leader.css"

const Leader = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("./datalist.JSON")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    

    const eventAddToCart = (leaderData) => {
        // console.log(leaderData.name);

        const match = cart.find((data) => data.key === leaderData.key);

        if (match === undefined) {
            const newCart = [...cart, leaderData];
            setCart(newCart);
        } else {
            alert(
                "You have already added this person"
            );
        }
    };

    return (
        <div className="leader-container">
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {
                    products.map(data => <Product key={data.key} product={data} addToCart={eventAddToCart}></Product>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Leader;
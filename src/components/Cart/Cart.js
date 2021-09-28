import React from 'react';
import SingleLeader from '../SingleLeader/SingleLeader';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const cost of cart) {
        total = total + parseFloat(cost.salary);
    }
    return (
        <div>
            <div>
                <h1>Leader Count</h1>
                <p>Total Leader : {props.cart.length}</p>
                <p>Total Salary : {total}</p>
            </div>
            <div>
                {cart.map((selectData) => (
                    <SingleLeader data={selectData} key={selectData.key}> </SingleLeader>
                ))}
            </div>
        </div>
    );
};

export default Cart;
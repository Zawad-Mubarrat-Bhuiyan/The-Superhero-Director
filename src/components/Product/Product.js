import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    console.log(props.product);
    const { name, year, age, position, salary, img } = props.product;
    const element = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div>
            <div className="col">
                <div className="card h-100 bg-secondary bg-gradient">
                    <img src={img} className="card-img-top image rounded mx-auto d-block" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-white fw-bold">Name : {name}</h5>
                        <p className="card-text text-white fw-bold"> Year : {year}</p>
                        <p className="card-text text-white fw-bold"> Age : {age}</p>
                        <p className="card-text text-white fw-bold"> Position : {position}</p>
                        <p className="card-text text-white fw-bold">Salary : {salary}</p>

                    </div>
                    <button onClick={() => {
                        props.addToCart(props.product);
                    }} className="btn btn-light p-2">{element} Select President  </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
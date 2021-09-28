import React from 'react';
import './SingleLeader.css';
const SingleLeader = (props) => {
    const { data } = props;
    return (
        <div>
            <div className="d-flex my-3 bg-light allignment">
                <img src={data.img} className="imgClass p-2 rounded-circle" style={{ height: '100px', width: '100px' }} alt="..." />
                <div>
                    <h5 className="card-title">{data.name}</h5>
                </div>

            </div>
        </div>
    );
};

export default SingleLeader;
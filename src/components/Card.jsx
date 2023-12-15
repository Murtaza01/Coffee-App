import React from "react";

function Card({ img, price, name }) {
    return <>
        <div className="card">
            <img src={img} alt="#" />
            <div className="info">
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    </>
}

export default Card
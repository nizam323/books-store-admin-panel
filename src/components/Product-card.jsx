import React from "react";

export default function ProductCard({ imgSrc, proId, proName, proPrice }) {
    return (
        <>
            <div className="ex">
                <div className="img">
                    <img src={imgSrc} alt="img" />
                </div>
                <div className="data">
                    <h2>Id: {proId}</h2>
                    <h2>{proName}</h2>
                    <h2>{proPrice}$</h2>
                </div>
            </div>

        </>
    )
}
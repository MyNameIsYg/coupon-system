import React from 'react';

function Coupon({ coupon }) {
    return (
        <div className="coupon-details-container">
            <img src={coupon.image} alt={coupon.title} />
            <h1>{coupon.title}</h1>
            <p>{coupon.description}</p>
            <p>
                <strong>מחיר:</strong> {coupon.price} ש"ח
            </p>
            <p>
                <strong>תוקף:</strong> {coupon.expirationDate}
            </p>
        </div>
    );
}

export default Coupon;

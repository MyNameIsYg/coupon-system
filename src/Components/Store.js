import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Store() {
    const [selectedCoupon, setSelectedCoupon] = useState(null);

    const coupons = useDispatch((state) => state.coupons);

    useEffect(() => {
        // TODO: קבלת קופונים זמינים מהשרת
    }, []);

    const handlePurchase = (coupon) => {
        // TODO: שליחת בקשה לרכישת קופון לשרת
       // onPurchase(coupon);
    };

    return (
        <div className="store-container">
            <h1>חנות קופונים</h1>
            <div className="coupons-container">
                {coupons.map((coupon) => (
                    <div className="coupon-card" key={coupon.id} onClick={() => handlePurchase(coupon)}>
                        <img src={coupon.image} alt={coupon.title} />
                        <h3>{coupon.title}</h3>
                        <p>{coupon.price} ש"ח</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Store;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BASE_URL from './BaseUrl';
import Coupon from './Coupon';

function HomePage({ user, onLogout }) {
    const [coupons, setCoupons] = useState([]);
    const [selectedCoupon, setSelectedCoupon] = useState(null);


    useEffect(() => {
        // TODO: קבלת קופונים שנרכשו מהשרת
        axios.get(BASE_URL+'/coupons').then((response) => {
            setCoupons(response.data);
        });

    }, []);

    const handleCouponClick = (coupon) => {
        setSelectedCoupon(coupon);
    };

    return (
        <div className="home-container">
            <h1>ברוכים הבאים, {user.name}!</h1>
            <div className="coupons-container">
                {coupons.map((coupon) => (
                    <div className="coupon-card" key={coupon.id} onClick={() => handleCouponClick(coupon)}>
                        <img src={coupon.image} alt={coupon.title} />
                        <h3>{coupon.title}</h3>
                    </div>
                ))}
            </div>
            <button onClick={onLogout}>התנתקות</button>
            {selectedCoupon && <Coupon coupon={selectedCoupon} />}
        </div>
    );
}

export default HomePage;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Coupon from './Coupon';
import Menu from './Menu';
import urls from './BaseUrl';

function HomePage({ user, onLogout }) {
    const [coupons, setCoupons] = useState([]);
    const [selectedCoupon, setSelectedCoupon] = useState(null);


    useEffect(() => {
        axios.get(`${urls.URL_API}/coupon/customers`).then((response) => {
            setCoupons(response.json);
        });

    }, []);



    return (
        <>
            <Menu />
            <div className="home-container">
                {coupons?.map((coupon) => (
                    <Coupon key={coupon.id} coupon={coupon} />
                ))}
            </div>
        </>
    );
}

export default HomePage;

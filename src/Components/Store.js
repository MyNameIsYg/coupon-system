import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import urls from './BaseUrl';
import { setCoupons } from '../redux/action/storeAction';

function Store() {
    const [selectedCoupon, setSelectedCoupon] = useState(null);

    const coupons = useSelector((state) => state.coupons);
    const dispatch = useDispatch();


    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get(`${urls.URL_API}/coupon/customers/store`);
                dispatch(setCoupons(response.data)); // Dispatch action to set coupons in the store
            } catch (error) {
                console.error('Error fetching coupons:', error);
            }
        };
        fetchData(); // Call the async function
    })




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

import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import urls from './BaseUrl';

function Coupon({key, coupon }) {

    const navigate = useNavigate();

    const handlePurchase = () => {
        axios.put(`${urls.URL_API}/coupon/purchase/${key}`);
            
    }

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
            <button onClick={() => handlePurchase()}>רכישה</button>
            <button onClick={() => navigate('/home')}>חזרה</button>
        </div>
    );
}

export default Coupon;

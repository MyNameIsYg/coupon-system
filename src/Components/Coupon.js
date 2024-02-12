import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import urls from './BaseUrl';

function Coupon({key, coupon }) {

    const navigate = useNavigate();

    const handlePurchase = () => {
        axios.put(`${urls.URL_API}/coupon/purchase/${key}`);
        alert("The coupon has been purchased!");
    }

    return (
        <div className="coupon-details-container">
            <img src={coupon.image} alt={coupon.title} />
            <h1>{coupon.title}</h1>
            <p>{coupon.description}</p>
            <p>
                <strong>price:</strong> {coupon.price} $
            </p>
            <p>
                <strong>end date:</strong> {coupon.expirationDate}
            </p>
            <button onClick={() => handlePurchase()}>To purchase</button>
            <button onClick={() => navigate('/home')}>exit</button>
        </div>
    );
}

export default Coupon;

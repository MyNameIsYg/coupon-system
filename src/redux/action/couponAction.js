export const addCoupon = (coupon) => ({
    type: 'ADD_COUPON',
    payload: coupon
});

export const removeCoupon = (couponId) => ({
    type: 'REMOVE_COUPON',
    payload: { id: couponId }
});

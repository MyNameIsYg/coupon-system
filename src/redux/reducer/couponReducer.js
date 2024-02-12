
const coupons = [];



const couponReducer = (state = coupons, action) => {
    switch (action.type) {
        case 'ADD_COUPON':
            return [...state, action.payload]; // Add a new coupon to the state
        case 'REMOVE_COUPON':
            return state.filter(coupon => coupon.id !== action.payload.id); // Remove a coupon from the state
        case 'UPDATE_COUPON':
            return state.map(coupon => 
                coupon.id === action.payload.id ? action.payload : coupon // Update an existing coupon in the state
            );
        default:
            return state;
    }
}
export default couponReducer;
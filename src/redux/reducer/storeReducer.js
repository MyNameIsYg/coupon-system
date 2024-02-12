
const initialState = {
    coupons: []
};

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_COUPONS":
            return {
                ...state,
                coupons: action.payload
            };
        default:
            return state;
    }
};

export default storeReducer;

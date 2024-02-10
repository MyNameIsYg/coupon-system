const initialState = {
    user: {},
    isAuthenticated: false,
    error: null,
};


/**
 * Reducer for user state. Handles login and signup actions 
 * by setting user, isAuthenticated, and error in state.
*/
const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                error: null,
            };
        case 'SIGNUP':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                error: null,
            };
        default:
            return state;

    };
}

export default userReducer
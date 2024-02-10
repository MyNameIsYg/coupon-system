export const login = (userData) => ({
    type: 'LOGIN',
    payload: userData,
});


export const signup = (userData) => ({
    type: 'SIGNUP',
    payload: userData,
});
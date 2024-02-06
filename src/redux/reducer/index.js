import { combineReducers } from "redux";
import couponReducer from "./couponReducer";
import storeReducer from "./storeReducer";
import userReducer from "./userReducer";



export const allReducers = combineReducers({
    coupenReducer: couponReducer,
    storeReducer: storeReducer,
    userReducer: userReducer
})
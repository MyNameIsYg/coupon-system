import { createStore } from "redux";
import allReducers from "./reducers"

// Create a Redux store with all reducers
// and export it
const store = createStore(
    allReducers
);
store.getState()
export default store;
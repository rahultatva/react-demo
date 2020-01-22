import { combineReducers } from "redux";
import { userReducer } from "./Users/reducers";

const appReducers = {
    users: userReducer
};
// combining all reducers to make root Reducer
const createRootReducer = () =>
    combineReducers({
        ...appReducers
    });

export default createRootReducer;

import { combineReducers } from "redux";
import moneyItemReducer from "./moneyItemReducer";

const AppReducer = combineReducers({
    moneyItemReducer,
});

export default AppReducer;
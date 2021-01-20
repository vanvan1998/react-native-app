import { combineReducers } from "redux";
import moneyItemReducer from "../modules/Home/reducer";

const AppReducer = combineReducers({
    moneyItemReducer,
});

export default AppReducer;
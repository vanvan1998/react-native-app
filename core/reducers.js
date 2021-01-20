import { combineReducers } from "redux";
import moneyItemReducer from "../modules/MoneyItemList/reducer";

const AppReducer = combineReducers({
    moneyItemReducer,
});

export default AppReducer;
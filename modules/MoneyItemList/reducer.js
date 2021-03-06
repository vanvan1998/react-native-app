import { constants } from '../../constants/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    moneyItemList: [],
    totalSpending: 0,
    totalIncome: 0,
    balance: 0
};

const MoneyItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_LIST_MONEY_ITEM_SUCCESS:
            return {
                ...state,
                moneyItemList: action.data.moneyItemList,
                totalSpending: action.data.totalSpending,
                totalIncome: action.data.totalIncome,
                balance: action.data.balance,
            };
        case constants.ADD_LIST_MONEY_ITEM_SUCCESS:
            return {
                ...state,
                moneyItemList: action.data.moneyItemList,
                totalSpending: action.data.totalSpending,
                totalIncome: action.data.totalIncome,
                balance: action.data.balance,
            };
        default:
            return state;
    }
};

export default MoneyItemReducer;
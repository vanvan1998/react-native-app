import { constants } from '../constants/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    moneyItemList: [{ title: 'cause', value: 20000 }, { title: 'cause1', value: 40000 }],
    total: 60000
};

const MoneyItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_LIST_MONEY_ITEM_SUCCESS:
            return {
                ...state,
                moneyItemList: action.data.moneyItemList,
                total: action.data.total
            };

        default:
            return state;
    }
};

export default MoneyItemReducer;
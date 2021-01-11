import { constants } from '../constants/index';
import Toast from 'react-native-tiny-toast';

const axios = require('axios');

const GetListMoneyItemAction = () => ({
    type: constants.GET_LIST_MONEY_ITEM,
});

const GetListMoneyItemSuccessAction = (data) => ({
    type: constants.GET_LIST_MONEY_ITEM_SUCCESS,
    data: data
});

const AddListMoneyItemAction = () => ({
    type: constants.ADD_LIST_MONEY_ITEM,
});
export { GetListMoneyItemAction, AddListMoneyItemAction, GetListMoneyItemSuccessAction }
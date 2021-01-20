import { constants } from '../../constants/index';

const getListMoneyItem = () => ({
    type: constants.GET_LIST_MONEY_ITEM,
});

const getListMoneyItemSuccess = (data) => ({
    type: constants.GET_LIST_MONEY_ITEM_SUCCESS,
    data: data
});

const addListMoneyItem = (valueAdd) => ({
    type: constants.ADD_LIST_MONEY_ITEM,
    data: valueAdd
});

const addListMoneyItemSuccess = (data) => ({
    type: constants.ADD_LIST_MONEY_ITEM_SUCCESS,
    data: data
});
export { getListMoneyItem, addListMoneyItem, getListMoneyItemSuccess, addListMoneyItemSuccess }
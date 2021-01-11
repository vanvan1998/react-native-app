import { call, put, takeLatest } from 'redux-saga/effects';
import { constants } from '../constants/index';
import { GetListMoneyItemSuccessAction } from '../actions/moneyItemAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* addMoneyItem(actions) {
    const valueSearch = actions.data.search
    var todoList = JSON.parse(localStorage.getItem('todoList'))
    const result = todoList.filter(todo => todo.indexOf(valueSearch) !== -1);
    console.log(result)
}
export function* WatchAddMoneyItem() {
    yield takeLatest(constants.ADD_LIST_MONEY_ITEM, addMoneyItem)
}

function GetItemAsyncStorage(title) {
    return AsyncStorage.getItem(title)
}

function SetItemAsyncStorage(title, data) {
    return AsyncStorage.setItem(title, data)
}

function* GetMoneyItemList() {
    try {
        const moneyItemList = yield call(GetItemAsyncStorage, 'moneyItemList')
        const total = yield call(GetItemAsyncStorage, 'total')
        console.log('saga', JSON.parse(moneyItemList)[0])
        if (moneyItemList) {
            yield put(GetListMoneyItemSuccessAction({
                moneyItemList: JSON.parse(moneyItemList),
                total: JSON.parse(total)
            }))
        }
    } catch (error) {
        console.log(error)
    }
    // try {
    //     const res = yield call(GetAPIMoneyItemList);
    //     yield put(GetListMoneyItemSuccessAction(res?.data))
    // } catch (error) {
    //     console.log(error)
    // }
}
export function* WatchGetMoneyItemList() {
    yield takeLatest(constants.GET_LIST_MONEY_ITEM, GetMoneyItemList)
}

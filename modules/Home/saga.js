import { call, put, select, takeLatest } from 'redux-saga/effects';
import { constants } from '../../constants/index';
import { GetListMoneyItemSuccessAction, AddListMoneyItemSuccessAction } from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* addMoneyItem(actions) {
    try {
        const valueAdd = actions.data
        var { moneyItemList, totalIncome, totalSpending, balance } = yield select(state => state.moneyItemReducer)
        // const moneyItemListStorage = yield call(GetItemAsyncStorage, 'moneyItemList')
        // const moneyItemList = JSON.parse(moneyItemListStorage)

        moneyItemList.push(valueAdd)
        totalSpending += parseInt(valueAdd.value)
        balance = totalIncome - totalSpending

        yield call(SetItemAsyncStorage, 'moneyItemList', JSON.stringify(moneyItemList))
        yield call(SetItemAsyncStorage, 'totalSpending', JSON.stringify(totalSpending))
        yield call(SetItemAsyncStorage, 'balance', JSON.stringify(balance))

        yield put(AddListMoneyItemSuccessAction({
            moneyItemList: moneyItemList,
            totalIncome: totalIncome,
            totalSpending: totalSpending,
            balance: balance,
        }))

    } catch (error) {
        console.log(error)
    }

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
        // const a = yield call(SetItemAsyncStorage, 'moneyItemList', JSON.stringify([{ title: 'cause', value: 20000 }, { title: 'cause1', value: 40000 }]))
        // const b = yield call(SetItemAsyncStorage, 'totalIncome', JSON.stringify(80000))
        // const c = yield call(SetItemAsyncStorage, 'totalSpending', JSON.stringify(60000))
        // const d = yield call(SetItemAsyncStorage, 'balance', JSON.stringify(20000))
        const moneyItemList = yield call(GetItemAsyncStorage, 'moneyItemList')
        const totalIncome = yield call(GetItemAsyncStorage, 'totalIncome')
        const totalSpending = yield call(GetItemAsyncStorage, 'totalSpending')
        const balance = yield call(GetItemAsyncStorage, 'balance')
        if (moneyItemList) {
            yield put(GetListMoneyItemSuccessAction({
                moneyItemList: JSON.parse(moneyItemList),
                totalIncome: JSON.parse(totalIncome),
                totalSpending: JSON.parse(totalSpending),
                balance: JSON.parse(balance),
            }))
        }
    } catch (error) {
        console.log(error)
    }
}
export function* WatchGetMoneyItemList() {
    yield takeLatest(constants.GET_LIST_MONEY_ITEM, GetMoneyItemList)
}

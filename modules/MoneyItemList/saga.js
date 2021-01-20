import { call, put, select, takeLatest } from 'redux-saga/effects';
import { constants } from '../../constants/index';
import { getListMoneyItemSuccess, addListMoneyItemSuccess } from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* addMoneyItemWorker(actions) {
    try {
        const valueAdd = actions.data
        var { moneyItemList, totalIncome, totalSpending, balance } = yield select(state => state.moneyItemReducer)
        // const moneyItemListStorage = yield call(getItemAsyncStorage, 'moneyItemList')
        // const moneyItemList = JSON.parse(moneyItemListStorage)

        moneyItemList.push(valueAdd)
        totalSpending += parseInt(valueAdd.value)
        balance = totalIncome - totalSpending

        yield call(setItemAsyncStorage, 'moneyItemList', JSON.stringify(moneyItemList))
        yield call(setItemAsyncStorage, 'totalSpending', JSON.stringify(totalSpending))
        yield call(setItemAsyncStorage, 'balance', JSON.stringify(balance))

        yield put(addListMoneyItemSuccess({
            moneyItemList: moneyItemList,
            totalIncome: totalIncome,
            totalSpending: totalSpending,
            balance: balance,
        }))

    } catch (error) {
        console.log(error)
    }

}
export function* watchAddMoneyItem() {
    yield takeLatest(constants.ADD_LIST_MONEY_ITEM, addMoneyItemWorker)
}

function getItemAsyncStorage(title) {
    return AsyncStorage.getItem(title)
}

function setItemAsyncStorage(title, data) {
    return AsyncStorage.setItem(title, data)
}

function* getMoneyItemListWorker() {
    try {
        const moneyItemList = yield call(getItemAsyncStorage, 'moneyItemList')
        if (moneyItemList) {
            const totalIncome = yield call(getItemAsyncStorage, 'totalIncome')
            const totalSpending = yield call(getItemAsyncStorage, 'totalSpending')
            const balance = yield call(getItemAsyncStorage, 'balance')
            
            yield put(getListMoneyItemSuccess({
                moneyItemList: JSON.parse(moneyItemList),
                totalIncome: JSON.parse(totalIncome),
                totalSpending: JSON.parse(totalSpending),
                balance: JSON.parse(balance),
            }))
        } else {
            const a = yield call(setItemAsyncStorage, 'moneyItemList', JSON.stringify([]))
            const b = yield call(setItemAsyncStorage, 'totalIncome', JSON.stringify(0))
            const c = yield call(setItemAsyncStorage, 'totalSpending', JSON.stringify(0))
            const d = yield call(setItemAsyncStorage, 'balance', JSON.stringify(0))
        }
    } catch (error) {
        console.log(error)
    }
}
export function* watchGetMoneyItemList() {
    yield takeLatest(constants.GET_LIST_MONEY_ITEM, getMoneyItemListWorker)
}

import { all } from 'redux-saga/effects';
import { WatchAddMoneyItem, WatchGetMoneyItemList } from './moneyItemListSaga';

export default function* RootSaga() {
    yield all([
        WatchAddMoneyItem(),
        WatchGetMoneyItemList()
    ]
    );
};
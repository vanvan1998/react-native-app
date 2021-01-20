import { all } from 'redux-saga/effects';
import { WatchAddMoneyItem, WatchGetMoneyItemList } from '../modules/Home/saga';

export default function* RootSaga() {
    yield all([
        WatchAddMoneyItem(),
        WatchGetMoneyItemList()
    ]
    );
};
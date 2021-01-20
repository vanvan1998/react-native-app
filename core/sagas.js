import { all } from 'redux-saga/effects';
import { watchAddMoneyItem, watchGetMoneyItemList } from '../modules/MoneyItemList/saga';

export default function* RootSaga() {
    yield all([
        watchAddMoneyItem(),
        watchGetMoneyItemList()
    ]
    );
};
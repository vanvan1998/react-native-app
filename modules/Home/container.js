import MoneyItemList from './components'
import { getListMoneyItem, addListMoneyItem } from '../MoneyItemList/actions'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return ({ moneyItemReducer: state.moneyItemReducer })
};
const mapDispatchToProps = dispatch => {
    return {
        getListMoneyItem: () => dispatch(getListMoneyItem()),
        addListMoneyItem: (valueAdd) => dispatch(addListMoneyItem(valueAdd)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoneyItemList);

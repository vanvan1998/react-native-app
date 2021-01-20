import Home from './components'
import { AddListMoneyItemAction, GetListMoneyItemAction } from '../Home/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return ({ moneyItemReducer: state.moneyItemReducer })
};
const mapDispatchToProps = dispatch => {
    return {
        GetListMoneyItemAction: () => dispatch(GetListMoneyItemAction()),
        AddListMoneyItemAction: (valueAdd) => dispatch(AddListMoneyItemAction(valueAdd)),

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

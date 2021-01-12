import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AddListMoneyItemAction, GetListMoneyItemAction } from '../actions/moneyItemAction';
import MoneyItem from '../components/moneyItem';
import { connect } from 'react-redux';


function MoneyItemList(props) {
    const { navigation } = props
    // const { moneyItemList, totalIncome, totalSpending, balance } = useSelector(state => {
    //     return state.moneyItemReducer
    // })
    const { moneyItemList, totalIncome, totalSpending, balance } = props.moneyItemReducer

    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)

    useEffect(() => {
        try {
            props.GetListMoneyItemAction()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <React.Fragment >
            <Text style={styles.text}>totalIncome: {totalIncome}</Text>
            <Text style={styles.text}>totalSpending: {totalSpending}</Text>
            <Text style={styles.text}>balance: {balance}</Text>
            <FlatList data={moneyItemList}
                renderItem={({ item }) => {
                    return <MoneyItem item={item} navigation={navigation} ></MoneyItem>
                }
                }
                keyExtractor={(item) => item.title}
                contentContainerStyle={styles.scrollView}></FlatList>
            <TextInput style={[styles.text, styles.textInput]} defaultValue={title} onChangeText={text => {
                setTitle(text)
            }}></TextInput>
            <TextInput keyboardType='numeric' autoCompleteType='cc-number' style={[styles.text, styles.textInput]} defaultValue={value} onChangeText={text => {
                setValue(text)
            }}></TextInput>
            <Button onPress={() => {
                props.AddListMoneyItemAction({
                    title: title, value: value
                })
            }} title='aaaa'></Button>

        </React.Fragment >
    );
}

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
)(MoneyItemList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    scrollView: {
        padding: 6,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 0,
        paddingHorizontal: 16,
        color: '#f20a30'
    },
    textInput: { height: 40, borderColor: 'gray', borderWidth: 1, margin: 16 }
});

import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import MoneyItemAdd from './MoneyItemAdd';

function MoneyItemList(props) {
    const { totalIncome, totalSpending, balance } = props.moneyItemReducer

    useEffect(() => {
        try {
            props.getListMoneyItem()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleUpdateItemTotal = () => {
    }

    const renderItemTotal = (title, value, textColor) => {
        return <TouchableOpacity onPress={handleUpdateItemTotal}
            style={[styles.button,, { backgroundColor: textColor }]}>
            <Text style={[styles.textIncome, styles.text]}>{title}: {value}</Text>
        </TouchableOpacity>
    }

    return (
        <React.Fragment >
            <View style={styles.viewTotal}>
                {renderItemTotal('Income', totalIncome, '#4279a3')}
                {renderItemTotal('Spending', totalSpending, '#ff6f69')}
                {renderItemTotal('Balance', balance, '#88d8b0')}
            </View>
            <MoneyItemAdd addListMoneyItem={props.addListMoneyItem}></MoneyItemAdd>
        </React.Fragment >
    );
}

export default MoneyItemList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        padding: 16,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 16,
        color: 'white',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignContent: 'center',
    },
    viewTotal: {
        flexDirection: 'column',
    },
});

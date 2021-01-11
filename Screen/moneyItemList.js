import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MoneyItem from '../components/moneyItem';
import { GetListMoneyItemAction } from '../actions/moneyItemAction';


export default function MoneyItemList(props) {
    const { navigation } = props
    const { moneyItemList, total } = useSelector(state => {
        return state.moneyItemReducer
    })
    console.log('reducer', moneyItemList, total)
    const dispatch = useDispatch()
    return (
        <React.Fragment >
            <Text style={styles.text}>Total: {total}</Text>
            <FlatList data={moneyItemList}
                renderItem={({ item }) => {
                    return <MoneyItem item={item} navigation={navigation} ></MoneyItem>
                }
                }
                keyExtractor={(item) => item.title}
                contentContainerStyle={styles.scrollView}></FlatList>

            <Button onPress={() => {
                try {
                    dispatch(GetListMoneyItemAction())
                } catch (error) {
                    console.log(error)
                }
            }} title='aaaa'></Button>

        </React.Fragment>
    );
}

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
        padding: 16,
    }
});

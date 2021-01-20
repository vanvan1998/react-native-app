import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MoneyItem from './moneyItem';


function MoneyItemList(props) {
    const { navigation } = props
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
            <View style={styles.viewTotal}>
                <Text style={[styles.textIncome, styles.text]}>Income: {totalIncome}</Text>
                <Text style={[styles.textSpending, styles.text]}>Spending: {totalSpending}</Text>
                <Text style={[styles.textBalance, styles.text]}>Balance: {balance}</Text>
            </View>
            <FlatList data={moneyItemList}
                renderItem={({ item }) => {
                    return <MoneyItem item={item} navigation={navigation} />
                }}
                keyExtractor={(item) => item.title}
                contentContainerStyle={styles.scrollView}></FlatList>
            <TextInput style={[styles.textInput]} defaultValue={title} onChangeText={text => {
                setTitle(text)
            }}></TextInput>
            <TextInput keyboardType='numeric' autoCompleteType='cc-number' style={[styles.textInput]} defaultValue={value} onChangeText={text => {
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
    scrollView: {
        padding: 6,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 3,
        paddingHorizontal: 16,
        color: 'white',
        flex: 1,
        borderRadius: 10,
        margin: 5,
    },
    textIncome: {
        backgroundColor: '#4279a3',
    },
    textSpending: {
        backgroundColor: '#ff6f69',
    },
    textBalance: {
        backgroundColor: '#88d8b0',
    },
    viewTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: { height: 40, borderColor: 'gray', borderWidth: 1, margin: 16 }
});

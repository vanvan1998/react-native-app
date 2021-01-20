import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import MoneyItemAdd from './MoneyItemAdd';
import Dialog from "react-native-dialog";

function MoneyItemList(props) {
    const { totalIncome, totalSpending, balance } = props.moneyItemReducer
    const [value, setValue] = useState(0)
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            props.getListMoneyItem()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleUpdateItemIncome = () => {
        console.log('ssssssssssssssssssssssssssssssssssss')
        setVisible(true);
    }


    const renderDialog = () => {
        return (

            <View>
                {/* <TextInput keyboardType='numeric' autoCompleteType='cc-number'
                            style={styles.textInput}
                            defaultValue={value} onChangeText={text => { setValue(text) }}>
                        </TextInput> */}
                <Dialog.Container visible={visible}>
                    <Dialog.Title>Account delete</Dialog.Title>
                    <Dialog.Description>
                        Do you want to delete this account? You cannot undo this action.
                    </Dialog.Description>
                    <Dialog.Button label="Cancel" onPress={handleCancel} />
                    <Dialog.Button label="Delete" onPress={handleDelete} />
                </Dialog.Container>
            </View>
        );
    }

    const renderItemTotal = (title, value, textColor, handleUpdateItemTotal) => {
        return <TouchableOpacity onPress={handleUpdateItemTotal}
            style={[styles.button, , { backgroundColor: textColor }]}>
            <Text style={[styles.textIncome, styles.text]}>{title}: {value}</Text>
        </TouchableOpacity>
    }

    return (
        <React.Fragment >
            {renderDialog}
            <View style={styles.viewTotal}>
                {renderItemTotal('Income', totalIncome, '#4279a3', handleUpdateItemIncome)}
                {renderItemTotal('Spending', totalSpending, '#ff6f69', handleUpdateItemIncome)}
                {renderItemTotal('Balance', balance, '#88d8b0', handleUpdateItemIncome)}
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
    textInput: {
        height: 40,
        borderRadius: 5,
        // borderBottomColor: 'grey',
        // borderBottomWidth: 1,
        backgroundColor: '#e5e6eb',
        marginBottom: 20,
    },
});

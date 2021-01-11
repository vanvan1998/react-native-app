import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

MoneyItem.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.object
};

MoneyItem.defaultProps = {
    title: '',
    navigation: null

}

function MoneyItem(props) {
    const { item: { title, value }, navigation } = props

    function handleMoneyItemClick(params) {
        navigation.navigate('MoneyItemDetail', { MoneyItemName: title })
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handleMoneyItemClick}>
            <View >
                <Text style={styles.text}>{title} : {value}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        height: 60,
        padding: 10,
        margin: 10,
        alignContent: 'stretch',
        alignItems: 'center',
        flex: 1,
        borderRadius: 8,
        shadowColor: '#000',
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 0 },
        elevation: 10,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
});

export default MoneyItem;

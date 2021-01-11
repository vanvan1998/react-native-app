import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native'
import FacebookIcon from '../assets/facebook.png'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

MoneyItemList.propTypes = {
    title: PropTypes.string,
};

MoneyItemList.defaultProps = {
    title: ''
}

function MoneyItemList(props) {
    const { title } = props

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Image style={styles.image} source={FacebookIcon}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
    },
    container: {
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        height: 150,
        padding: 10,
        margin: 10,
        alignContent: 'center',
        alignItems: 'center',
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

export default MoneyItemList;

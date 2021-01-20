import React from 'react';
import { Text } from 'react-native'
import PropTypes from 'prop-types';
import { useEffect } from 'react';

MoneyItemDetail.propTypes = {
    route: PropTypes.object,
};

MoneyItemDetail.defaultProps = {
    route: null
}

function MoneyItemDetail(props) {
    const { route, navigation } = props
    const { moneyItemName } = route.params

    useEffect(() => {
        navigation.setOptions({
            headerTitle: moneyItemName,
            headerTitleStyle: {
                textAlign: 'center',
                fontWeight: 'normal',
            },
            headerTitleAlign: 'center'
        });
    }, [])
    return (
        <Text>{moneyItemName}</Text>
    );
}

export default MoneyItemDetail;
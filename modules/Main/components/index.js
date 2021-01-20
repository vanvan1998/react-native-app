import React from 'react';
import {View,Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import MoneyItemList from '../../MoneyItemList'
import MoneyItemDetail from '../../MoneyItemDetail'

const Stack = createStackNavigator();

function Main(props) {
    return (
        <Stack.Navigator initialRouteName="MoneyItemList">
        <Stack.Screen name="MoneyItemList" component={MoneyItemList} options={{ title: 'Money Item List' }}>
        </Stack.Screen>
        <Stack.Screen name="MoneyItemDetail" component={MoneyItemDetail} options={{ title: 'Money Item Detail' }} />
      </Stack.Navigator>
    );
}

export default Main;
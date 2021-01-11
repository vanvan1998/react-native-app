import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import MoneyItemDetail from './moneyItemDetail';
import MoneyItemList from './moneyItemList';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="MoneyItemList">
            <Stack.Screen name="MoneyItemList" component={MoneyItemList} options={{ title: 'Money Item List' }} />
            <Stack.Screen name="MoneyItemDetail" component={MoneyItemDetail} options={{ title: 'Money Item Detail' }} />
        </Stack.Navigator>
    );
}
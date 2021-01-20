import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import MoneyItemDetail from './moneyItemDetail';
import MoneyItemList from './moneyItemList';

const Stack = createStackNavigator();

export default function Home(props) {
  return (
    <Stack.Navigator initialRouteName="MoneyItemList">
      <Stack.Screen name="MoneyItemList"
        options={{ title: 'Money Item List' }}>
        {() => <MoneyItemList moneyItemReducer={props.moneyItemReducer}
          GetListMoneyItemAction={props.GetListMoneyItemAction}
          AddListMoneyItemAction={props.AddListMoneyItemAction}
          navigation={props.navigation} />}
      </Stack.Screen>
      <Stack.Screen name="MoneyItemDetail" component={MoneyItemDetail} options={{ title: 'Money Item Detail' }} />
    </Stack.Navigator>
  );
}




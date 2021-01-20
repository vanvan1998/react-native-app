import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import Home from '../../Home';

const Stack = createStackNavigator();

export default function HomeStack(props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}>
      </Stack.Screen>
    </Stack.Navigator>
  );
}
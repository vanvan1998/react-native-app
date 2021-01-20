import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';

import store from './core/store';
import { Provider } from 'react-redux';

import Main from './modules/Main';
import HomeStack from './modules/HomeStack';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const axios = require('axios');
axios.defaults.baseURL = 'http://js-post-api.herokuapp.com/api';

export default function App() {

  return (
    <Provider store={store}  >
      <NavigationContainer>
        <Tab.Navigator
          // lazy={false}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Main') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Main" component={Main} options={{ title: 'Money Item List' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>);
} 
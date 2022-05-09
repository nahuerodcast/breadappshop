import React from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CartScreen from '../screens/CartScreen/CartScreen';
import {colors} from '../constants/theme';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : colors.primaryColor,
        headerTitleStyle: {
          fontSize: 17,
        },
      }}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartNavigator;

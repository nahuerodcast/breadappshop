import React from 'react';
import {Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OrderScreen from '../screens/OrderScreen/OrderScreen';
import {colors} from '../constants/theme';

const Stack = createNativeStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="OrderScreen"
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
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default OrderNavigator;

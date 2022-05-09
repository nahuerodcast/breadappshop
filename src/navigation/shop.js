import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../constants/theme';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primaryColor,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 17,
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={({route}) => ({title: route.params.name})}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;

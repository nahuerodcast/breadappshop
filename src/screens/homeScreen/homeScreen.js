import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

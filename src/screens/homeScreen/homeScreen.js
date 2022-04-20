import {SafeAreaView, Text, Button} from 'react-native';
import React from 'react';
import {styles} from '../HomeScreen/styles';

export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> HomeScreen</Text>
      <Button
        title="Go to categories"
        onPress={() => {
          navigation.navigate('CategoriesScreen');
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

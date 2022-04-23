import {SafeAreaView, Text, Button} from 'react-native';
import React from 'react';
import {styles} from '../HomeScreen/styles';

export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Home screen</Text>
      <Button
        title="Go to categories"
        onPress={() => {
          navigation.navigate('CategoriesScreen', {title: 'CategoriesScreen'});
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

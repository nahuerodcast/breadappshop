import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> CategoriesScreen</Text>
      <Button
        title="Go to ProductScreen"
        onPress={() => {
          navigation.navigate('ProductScreen');
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

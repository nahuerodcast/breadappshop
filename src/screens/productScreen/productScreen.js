import {View, Text, Button} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const ProductScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> ProductScreen</Text>
      <Button
        title="Go to home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default ProductScreen;

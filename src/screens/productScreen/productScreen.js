import {View, Text, Button, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const ProductScreen = ({navigation, route}) => {
  const {product} = route.params;
  const {name, description, image, price, weight} = product;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `${image}`,
        }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}> {name}</Text>
        <Text style={styles.desc}> {description}</Text>
        <Text style={styles.price}> ${price}</Text>
        <Text style={styles.desc}> {weight}</Text>
        <View style={styles.orderButton}>
          <View style={styles.container}>
            <Button
              title="Order Now 🥖"
              color={'white'}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>
        </View>
        <View style={styles.button}>
          <View style={styles.container}>
            <Button
              title="Go to home🏠"
              color={'black'}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;

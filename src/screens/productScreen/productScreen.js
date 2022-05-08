import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector, connect, useDispatch} from 'react-redux';
import {addItem} from '../../store/actions/cart.action';

export const ProductScreen = ({navigation, route}) => {
  const dispatch = useDispatch();

  const product = useSelector(state => state.products.selectedProduct);

  const {name, description, image, price, weight} = product;

  const handleAddToCart = () => dispatch(addItem(product));

  return (
    <View style={styles.mainContainer}>
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
                  handleAddToCart();
                  navigation.navigate('CartScreen');
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CartScreen');
        }}
        style={styles.cartButton}>
        <Text style={styles.cartDesc}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(ProductScreen);

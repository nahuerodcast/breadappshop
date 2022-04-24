import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CategoryProducts = ({item, onSelected}) => {
  let TouchableComponent = TouchableOpacity;
  return (
    <View style={styles.container}>
      <TouchableComponent
        style={styles.touchable}
        onPress={() => onSelected(item)}>
        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: `${item.image}`,
              }}
            />
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default CategoryProducts;

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CategoryGrid = ({item, onSelected}) => {
  let TouchableComponent = TouchableOpacity;

  return (
    <View style={styles.container}>
      <TouchableComponent
        style={{...styles.touchable, ...{backgroundColor: item.color}}}
        onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.desc}>{item.name}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default CategoryGrid;

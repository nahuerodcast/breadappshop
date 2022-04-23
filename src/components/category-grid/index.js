import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CategoryGrid = ({item, onSelected}) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
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

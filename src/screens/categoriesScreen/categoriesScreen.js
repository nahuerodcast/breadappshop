import {View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {PRODUCTS} from '../../constants/products';
import CategoryProducts from '../../components/category-products/index';

export const CategoriesScreen = ({navigation, route}) => {
  const {id} = route.params;
  const selectedCategory = PRODUCTS.filter(
    category => category.category === id,
  );
  const handleSelectCategory = product => {
    navigation.navigate('ProductScreen', {
      product,
      name: product.name,
    });
  };

  const renderItem = ({item}) => (
    <CategoryProducts item={item} onSelected={handleSelectCategory} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container} />
      <FlatList
        data={selectedCategory}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

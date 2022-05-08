import {View, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import CategoryProducts from '../../components/category-products/index';
import {useSelector, useDispatch} from 'react-redux';
import {
  filteredProducts,
  selectProduct,
} from '../../store/actions/product.actions';

export const CategoriesScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const categoryProduct = useSelector(state => state.products.filteredProducts);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory,
  );
  const handleSelectCategory = product => {
    dispatch(selectProduct(product.id));
    navigation.navigate('ProductScreen', {name: product.name});
  };
  const renderItem = ({item}) => (
    <CategoryProducts item={item} onSelected={handleSelectCategory} />
  );

  useEffect(() => {
    dispatch(filteredProducts(selectedCategory.id));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container} />
      <FlatList
        data={categoryProduct}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;

import {SafeAreaView, Text, FlatList, View} from 'react-native';
import React from 'react';
import {styles} from '../HomeScreen/styles';
import CategoryGrid from '../../components/category-grid/index';
import {useSelector, useDispatch, connect} from 'react-redux';
import {selectedCategory} from '../../store/actions/category.actions';

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);

  const handleSelectCategory = category => {
    dispatch(selectedCategory(category.id));
    navigation.navigate('CategoriesScreen', {
      title: category.name,
    });
  };

  const renderItem = ({item}) => (
    <CategoryGrid item={item} onSelected={handleSelectCategory} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container} />
      <Text style={styles.title}> Bread shop 🥖</Text>
      <Text style={styles.desc}>
        The best online shop for the best breads in your town
      </Text>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

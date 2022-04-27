import {SafeAreaView, Text, FlatList, View} from 'react-native';
import React from 'react';
import {styles} from '../HomeScreen/styles';
import {CATEGORIES} from '../../constants/categories';
import CategoryGrid from '../../components/category-grid/index';

export const HomeScreen = ({navigation}) => {
  const handleSelectCategory = category => {
    navigation.navigate('CategoriesScreen', {
      id: category.id,
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
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

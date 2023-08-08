import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import CategoryForm from '../components/category.component';
import {useSelector} from 'react-redux';

const CategoryScreen = () => {
  const categories = useSelector((state: any) => state.categories);
  return (
    <ScrollView>
      <FlatList data={categories} renderItem={({item}) => <CategoryForm />} />

      {/* <CategoryForm />
      <CategoryForm /> */}
    </ScrollView>
  );
};

export default CategoryScreen;

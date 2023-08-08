import {View, FlatList, Button, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import CategoryForm from '../components/category.component';
import {useDispatch, useSelector} from 'react-redux';
import {addCategory, loadCategory} from '../redux/category/actions';

const CategoryScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.categories);
  const handleAddCategory = () => {
    console.log('Category', categories);
    dispatch(addCategory() as any);
  };

  useEffect(() => {
    dispatch(loadCategory() as any);
  }, []);

  return (
    <>
      <FlatList
        data={categories.categories}
        renderItem={({item}) => <CategoryForm category={item} />}
        keyExtractor={item => item.id.toString()} // Replace with your unique key extractor
      />

      {/* <CategoryForm />
      <CategoryForm /> */}
      <View style={styles.add_category_button}>
        <Button
          title="Add new category"
          onPress={handleAddCategory}
          color={'white'}
        />
      </View>
    </>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  add_category_button: {
    padding: 10,
    backgroundColor: '#35bbe0',
    marginHorizontal: 10,
    borderWidth: 0.3,
    borderRaduis: 5,
  },
});

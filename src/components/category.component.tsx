import {TextField} from '@material-ui/core';
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CategoryField from './category-field.component';
import AppButton from './button.component';
import DropdownPicker from './picker.component';
import AppPicker from './picker.component';

import {useDispatch, useSelector} from 'react-redux';
import {addCategoryField, deleteCategory} from '../redux/category/actions';

interface Category {
  id: number;
  name: string;
  fields: any[]; // Adjust the type if needed
}

interface CategoryFormProps {
  category: Category;
}

const CategoryForm: React.FC<CategoryFormProps> = (props: any) => {
  const [title, setTitle] = useState(props.category.name); // Dynamic title state

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    //dispatch(updateCategoryTitle(props.category.id, newTitle));
  };
  const dispatch = useDispatch() as any;
  const handleDelete = () => {
    console.log('delete category', props.category);
    dispatch(deleteCategory(props.category.id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.category_title}>{title}</Text>
      <View>
        <CategoryField changeText={handleTitleChange} />
      </View>
      <View style={styles.title_field_model}>
        <Text>Title Field: {title}</Text>
      </View>
      <View style={styles.action_section}>
        <View>
          <AppPicker />
        </View>
        <View>
          <AppButton label="Remove" onPress={handleDelete} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  delete_button: {
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  category_title: {
    marginVertical: 15,
  },
  form_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_container: {
    flex: 1,
  },
  field_container: {
    flex: 1,
    flexDirection: 'row',
  },
  field_type_container: {
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  title_field_model: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  action_section: {
    flexDirection: 'row',
  },
});

export default CategoryForm;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

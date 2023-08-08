import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CategoryField from './category-field.component';
import AppButton from './button.component';
import DropdownPicker from './picker.component';
import AppPicker from './picker.component';

import {useDispatch, useSelector} from 'react-redux';
import {
  addCategoryField,
  deleteCategory,
  updateField,
} from '../redux/category/actions';
import {Field, FieldType} from '../redux/types';
import {FlatList} from 'react-native-gesture-handler';
import TitleField from './title-field.component';

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
  const [selectedType, setSelectedType] = useState(); // Default type is Text

  const handleAddField = () => {
    const newField: Field = {
      name: 'New Field',
      type: selectedType as unknown,
    };

    dispatch(addCategoryField(props.category.id, newField));
    console.log(props.category.fields);
  };

  const handleFieldTitleChange = (fieldIndex: number, newTitle: string) => {
    dispatch(updateField(props.category.id, fieldIndex, newTitle));
  };

  const handleTypeChange = (newType: any) => {
    setSelectedType(newType);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.category_title}>{title}</Text>
      <View>
        <TitleField changeText={handleTitleChange} />
      </View>
      <FlatList
        data={props.category.fields}
        renderItem={({item, index}) => (
          <CategoryField
            name={item.name}
            type={item.type}
            changeText={title => handleFieldTitleChange(index, title)}
          />
        )}
      />
      <View style={styles.title_field_model}>
        <Text>Title Field: {title}</Text>
      </View>
      <View style={styles.action_section}>
        <View>
          <AppPicker
            onTypeChange={handleTypeChange}
            handleChange={handleAddField}
          />
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

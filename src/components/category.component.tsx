import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CategoryField from './category-field.component';
import AppButton from './button.component';
import AppPicker from './picker.component';

import {useDispatch, useSelector} from 'react-redux';
import {
  addCategoryField,
  deleteCategory,
  deleteCategoryField,
  updateField,
} from '../redux/category/actions';
import {Field, FieldType} from '../redux/types';
import {FlatList} from 'react-native-gesture-handler';
import TitleField from './title-field.component';

interface Category {
  id: number;
  name: string;
  fields: any[];
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

  const handleDeleteField = (fieldIndex: number) => {
    dispatch(deleteCategoryField(props.category.id, fieldIndex));
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
            handleDelete={handleDeleteField(index)}
          />
        )}
      />
      <View style={styles.title_field_model}>
        <Text style={styles.title_field_model_text}>Title Field: {title}</Text>
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
    marginHorizontal: 5,
    borderWidth: 0.6,
    padding: 10,
    marginVertical: 15,
    borderColor: '#15465f',
    borderRadius: 2,
  },
  delete_button: {
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  category_title: {
    marginVertical: 15,
    fontSize: 17,
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
    backgroundColor: '#5B5CDE',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 15,
    barderRadius: 3,
    borderWidth: 0.5,
  },
  action_section: {
    flexDirection: 'row',
  },
  title_field_model_text: {
    color: 'white',
  },
});

export default CategoryForm;

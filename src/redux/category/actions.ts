import {Category, Field, FieldType} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const ADD_FIELD = 'ADD_FIELD';

// export const addCategory = (text?: string) => ({
//   type: ADD_CATEGORY,
//   payload: {
//     text,
//   },
// });

// export const addCategory = (text?: string) => ({
//   type: ADD_CATEGORY,
//   payload: {
//     text,
//   },
// });

export const loadCategory = () => async (dispatch: any) => {
  try {
    const categories = await AsyncStorage.getItem('@category');
    if (categories !== null) {
      dispatch({type: 'LOAD_CATEGORY', payload: JSON.parse(categories)});
    }
  } catch (error) {
    console.log('Error loading categories:', error);
  }
};

export const addCategory =
  (text?: string) => async (dispatch: any, getState: any) => {
    try {
      const category: Category = {
        id: Date.now(),
        name: text ? text : 'new category',
        fields: [],
      };
      console.log(getState().categories);

      const newCategory = [...getState().categories, category];

      dispatch({type: ADD_CATEGORY, payload: newCategory});
      await AsyncStorage.setItem('@categories', JSON.stringify(newCategory));
    } catch (error) {
      console.log('Error adding newCategory:', error);
    }
  };

export const addCategoryField =
  (id: any, field: Field) => async (dispatch: any, getState: any) => {
    try {
      const updatedCategories = getState().categories.categories.map(
        (category: Category) =>
          category.id === id
            ? {...category, fields: [...category.fields, field]}
            : category,
      );
      dispatch({type: ADD_FIELD, payload: updatedCategories});
      await AsyncStorage.setItem(
        '@categories',
        JSON.stringify(updatedCategories),
      );
    } catch (error) {
      console.log('Error editing category:', error);
    }
  };

import {Category, Field, FieldType} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const ADD_FIELD = 'ADD_FIELD';
export const LOAD_CATEGORY = 'LOAD_CATEGORY';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const DELETE_CATEGORY_FIELD = 'DELETE_CATEGORY_FIELD';

export const updateField =
  (categoryId: number, fieldIndex: number, newTitle: string) =>
  async (dispatch: any, getState: any) => {
    try {
      const updatedCategories = getState().categories.map(
        (category: Category) =>
          category.id === categoryId
            ? {
                ...category,
                fields: category.fields.map((field, index) =>
                  index === fieldIndex ? {...field, name: newTitle} : field,
                ),
              }
            : category,
      );

      dispatch({type: UPDATE_FIELD, payload: updatedCategories});
      await AsyncStorage.setItem(
        '@categories',
        JSON.stringify(updatedCategories),
      );
    } catch (error) {
      console.log('Error updating field:', error);
    }
  };

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

export const deleteCategory =
  (categoryId: number) => async (dispatch: any, getState: any) => {
    try {
      const updatedCategories = getState().categories.categories.filter(
        (category: Category) => category.id !== categoryId,
      );
      dispatch({type: DELETE_CATEGORY, payload: updatedCategories});
      await AsyncStorage.setItem(
        '@categories',
        JSON.stringify(updatedCategories),
      ); // Serialize the data
    } catch (error) {
      console.log('Error deleting category:', error);
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

      const existingCategories = await AsyncStorage.getItem('@categories');
      const parsedCategories = existingCategories
        ? JSON.parse(existingCategories)
        : [];

      const ct = parsedCategories;
      const newCategories = [...ct, category];

      dispatch({type: ADD_CATEGORY, payload: newCategories});
      await AsyncStorage.setItem('@categories', JSON.stringify(newCategories));
    } catch (error) {
      console.log('Error adding newCategory:', error);
    }
  };

export const deleteCategoryField =
  (categoryId: number, fieldIndex: number) =>
  async (dispatch: any, getState: any) => {
    try {
      const updatedCategories = getState().categories.map(
        (category: Category) =>
          category.id === categoryId
            ? {
                ...category,
                fields: category.fields.filter(
                  (_, index) => index !== fieldIndex,
                ),
              }
            : category,
      );

      dispatch({type: DELETE_CATEGORY_FIELD, payload: updatedCategories});
      await AsyncStorage.setItem(
        '@categories',
        JSON.stringify(updatedCategories),
      );
    } catch (error) {
      console.log('Error deleting field:', error);
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

import {Category} from '../types';
import {addCategory, addCategoryField} from './actions';
import {ADD_CATEGORY, ADD_FIELD} from './actions';

interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [],
};

export const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case ADD_FIELD:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return initialState;
  }
};

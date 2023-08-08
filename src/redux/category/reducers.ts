import {Category} from '../types';
import {addCategory, addCategoryField, loadCategory} from './actions';
import {
  ADD_CATEGORY,
  ADD_FIELD,
  DELETE_CATEGORY,
  LOAD_CATEGORY,
} from './actions';

interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [],
};

export const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_CATEGORY:
      return {
        ...state,
        categories: action.payloads,
      };
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
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return initialState;
  }
};

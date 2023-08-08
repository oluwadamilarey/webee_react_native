import {configureStore} from '@reduxjs/toolkit';
import {categoryReducer} from '../redux/category/reducers';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});

export default store;

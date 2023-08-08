import {configureStore} from '@reduxjs/toolkit';
import {categoryReducer} from '../redux/category/reducers';
import componentReducer from '../redux/component/reducers';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    components: componentReducer,
  },
});

export default store;

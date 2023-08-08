import {ADD_COMPONENT} from './actions';

const initialState = {
  components: [],
};

const componentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COMPONENT:
      return {
        ...state,
        components: [...state.components, action.payload],
      };
    default:
      return state;
  }
};

export default componentReducer;

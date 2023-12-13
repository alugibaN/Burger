import { GET_DATA_FAILED, GET_DATA_SUCCESS } from "./action";

const initial = {
  data: [],
  dataSuccess: false,
  dat: false,
  dataName: [],
};

export const ingredientReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: [state.data, ...action.data],
        dataSuccess: action.success,
        dat: action.dat,
      };
    }
    default: {
      return state;
    }
  }
};

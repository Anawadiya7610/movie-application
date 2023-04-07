import * as actionTypes from "./constTypeSelect";

const initialState = {
  selectData: null,
};

export const selectReducer = (state = {initialState}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SELECT:
      return {
        ...state,
        isError: false,
        selectData: null,
        isLoading: true,
      };
    case actionTypes.FETCH_SELECT_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case actionTypes.FETCH_SELECT_SUCCESS:
      return {
        ...state,
        isError: false,
        selectsData: action.payload.data,
        isLoading: false,
      };
    default:
      return state;
  }
};

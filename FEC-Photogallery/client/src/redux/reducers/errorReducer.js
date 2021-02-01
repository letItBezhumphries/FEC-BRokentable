import { SET_ERROR } from "../types";

const initialState = {
  errorMessage: "",
  errorCode: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload.message,
        errorCode: action.payload.errorCode,
      };
    default:
      return state;
  }
};

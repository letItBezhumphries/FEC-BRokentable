import { GET_RESTAURANTS } from "../actions/types";

const initialState = {
  restaurants: [],
  query: "",
  filterType: "",
  currentPage: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
      };
    default:
      return state;
  }
}

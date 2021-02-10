import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import restaurantReducer from "./restaurantReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  error: errorReducer,
  restaurant: restaurantReducer,
  search: searchReducer,
});

export default rootReducer;

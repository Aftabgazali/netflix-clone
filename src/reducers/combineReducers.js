import { combineReducers } from "redux";
import movieReducer from "./movieReducers";
const rootReducers = combineReducers({
  movies: movieReducer,
});
export default rootReducers;

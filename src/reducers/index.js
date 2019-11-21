import listsReducers from "./listsReducer";
import {combineReducers} from "redux";

export default combineReducers({
  lists: listsReducers
});

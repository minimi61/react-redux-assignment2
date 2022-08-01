import { createStore } from "redux";
import { combineReducers } from "redux";

// import Todos from "../../components/Todos"; 
import todosReducer from '../modules/todosReducer'

const rootReducer = combineReducers({
  todosReducer 
});
const store = createStore(rootReducer);

export default store;
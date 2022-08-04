import { createStore } from "redux";
import { combineReducers } from "redux";

// import Todos from "../../components/Todos"; 
import todosReducer from '../modules/todosReducer'

const rootReducer = combineReducers({
  todosReducer 
});

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}


const store = createStore(rootReducer, persistedState);


store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
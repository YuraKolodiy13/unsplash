import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import general from "./general";

const createRootReducer = (history) => combineReducers({
  general,
  router: connectRouter(history),
});

export default createRootReducer;
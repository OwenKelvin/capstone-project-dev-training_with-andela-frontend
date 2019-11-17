import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
// import { routerReducer, routerMiddleware } from 'react-router-redux';

export default combineReducers({
  loginReducer,
  // routing: routerReducer
});

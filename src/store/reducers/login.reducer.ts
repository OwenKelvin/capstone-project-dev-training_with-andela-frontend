import { LOGIN_SUCCESS_ACTION } from '../actions/login.action';

const loginReducer = (state = {}, action: any): any => {
  switch (action.type) {
    case LOGIN_SUCCESS_ACTION:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
export default loginReducer;

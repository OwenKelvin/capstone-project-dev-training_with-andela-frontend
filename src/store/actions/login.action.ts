export const LOGIN_SUCCESS_ACTION = 'LOGIN SUCCESS';

const loginAction = (dispatch: Function): any => {
  return dispatch({
    type: LOGIN_SUCCESS_ACTION,
    payload: true
  });
};
export default loginAction;

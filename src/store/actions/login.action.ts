export const LOGIN_SUCCESS_ACTION = 'LOGIN SUCCESS';

const loginAction = (dispatch: any): any => {
  return dispatch({
    type: LOGIN_SUCCESS_ACTION,
    payload: true
  });
};
export default loginAction;

export const simpleAction = () => dispatch => {
  dispatch({
    type: "LOGIN SUCCESS",
    payload: true
  });
};

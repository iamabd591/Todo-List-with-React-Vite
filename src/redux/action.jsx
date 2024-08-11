export const ThemeChanger = (value) => async (dispatch) => {
  dispatch({
    type: "ThemeChanger",
    payload: value,
  });
};

export const Add = (value, todos) => async (dispatch) => {
  const payload = [value, ...todos];
  dispatch({
    type: "ADD",
    payload: payload,
  });
};

export const Delete = (value, todos) => (dispatch) => {
  let payload;
  if (value > -1) {
    payload = [...todos];
    payload.splice(value, 1);
  }
  dispatch({
    type: "DELETE",
    payload: payload,
  });
};
export const Update = (value, newValue, todos) => (dispatch) => {
  const updatedTodos = [...todos];
  updatedTodos[value] = newValue;
  dispatch({
    type: "UPDATE",
    payload: updatedTodos,
  });
};

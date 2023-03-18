import {
    LOGIN_ADMIN_ERROR,
    LOGIN_ADMIN_LOADING,
    LOGIN_ADMIN_SUCCESS,
    SET_ADMIN_ERROR,
    SET_ADMIN_LOADING,
    SET_ADMIN_SUCCESS,
} from "./actionTypes";

export const createAdmin = (payload) => async (dispatch) => {
  dispatch({ type: SET_ADMIN_LOADING });
  try {
    let response = await fetch(
      "https://technokart-backend.onrender.com/super-admin/createSuperAdmin",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      }
    );
    let result = await response.json();
    dispatch({ type: SET_ADMIN_SUCCESS, payload: result });
  } catch (error) {
    dispatch({ type: SET_ADMIN_ERROR });
  }
};

export const loginAdmin = (payload) => async (dispatch) => {
    dispatch({type:LOGIN_ADMIN_LOADING});
  try {
    let response = await fetch(
      "https://technokart-backend.onrender.com/super-admin/login",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      }
    );
    let result = await response.json();
    dispatch({type:LOGIN_ADMIN_SUCCESS,payload:result});
  } catch (error) {
    dispatch({type:LOGIN_ADMIN_ERROR,payload:error});
  }
};

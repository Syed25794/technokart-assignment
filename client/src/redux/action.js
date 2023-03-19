import {
  ADD_PARTNERS_ERROR,
  ADD_PARTNERS_LOADING,
  ADD_PARTNERS_SUCCESS,
  DELETE_PARTNERS_ERROR,
  DELETE_PARTNERS_LOADING,
  DELETE_PARTNERS_SUCCESS,
  EDIT_PARTNERS_ERROR,
  EDIT_PARTNERS_LOADING,
  EDIT_PARTNERS_SUCCESS,
  GET_PARTNERS_ERROR,
  GET_PARTNERS_LOADING,
  GET_PARTNERS_SUCCESS,
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
  dispatch({ type: LOGIN_ADMIN_LOADING });
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
    dispatch({ type: LOGIN_ADMIN_SUCCESS, payload: result });
  } catch (error) {
    dispatch({ type: LOGIN_ADMIN_ERROR, payload: error });
  }
};

export const deletePartner = (email) => async (dispatch) => {
  dispatch({ type: DELETE_PARTNERS_LOADING });
  try {
    const payload = {
      partner_email: email,
    };
    let response = await fetch(
      "https://technokart-backend.onrender.com/super-admin/deletePartner",
      {
        method: "DELETE",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      }
    );
    let result = await response.json();
    console.log(result);
    dispatch({ type: DELETE_PARTNERS_SUCCESS, payload: email });
  } catch (error) {
    dispatch({ type: DELETE_PARTNERS_ERROR, payload: error });
  }
};

export const getPartners =
  ({ page, limit }) =>
  async (dispatch) => {
    dispatch({ type: GET_PARTNERS_LOADING });
    try {
      let response = await fetch(
        `https://technokart-backend.onrender.com/super-admin/dashboard?page=${page}&limit=${limit}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      let result = await response.json();
      dispatch({ type: GET_PARTNERS_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({ type: GET_PARTNERS_ERROR, payload: error });
    }
  };

export const addPartner = (payload) => async (dispatch) => {
  dispatch({ type: ADD_PARTNERS_LOADING });
  try {
    let response = await fetch(
      "https://technokart-backend.onrender.com/super-admin/addPartner",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      }
    );
    let result = await response.json();
    dispatch({ type: ADD_PARTNERS_SUCCESS, payload: result.payload });
  } catch (error) {
    dispatch({ type: ADD_PARTNERS_ERROR, payload: error });
  }
};

export const editPartnerDetails = (payload) => async (dispatch) => {
  dispatch({type:EDIT_PARTNERS_LOADING});
  try {
    let response = await fetch(
      "https://technokart-backend.onrender.com/super-admin/editPartner",
      {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      }
    );
    let result = await response.json();
    dispatch({type:EDIT_PARTNERS_SUCCESS,payload:result.updatePartner})
  } catch (error) {
    dispatch({type:EDIT_PARTNERS_ERROR,payload:error});
  }
};

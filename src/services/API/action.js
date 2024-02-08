import { getCookie, setCookie } from "../../utils/cookie";
import { authHead, postHead, postHeadLogin, request } from "../../utils/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GET_DATA = "GET_DATA";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "FETCH_DATA_FAILURE";
export const POST_BURGER = "POST_BURGER";

export const REGISTRATION = "REGISTRATION";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const CLEAN = "CLEAN";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_PROFILE = "GET_PROFILE";
export const PATCH_PROFILE = "PATCH_PROFILE";
export const POST_PROFILE = "POST_PROFILE";
export const REFRESH_TOKEN = "REFRESH_TOKEN";
const refreshToken = getCookie("refreshToken");


// получение ингредиентов
export const getData = () => {
  return function (dispatch) {
    request(`ingredients`)
      .then((data) => {
        dispatch({
          type: GET_DATA_SUCCESS,
          data: [...data.data],
          success: data.success,
          dat: true,
        });
      })
      .catch(console.error);
  };
};

//отправка заказа
export const postOrders = (form) => {
  return function (dispatch) {
    request(`orders`, authHead(form, 'POST'))
      .then((data) => {
        dispatch({
          type: POST_BURGER,
          order: data,
        });
      })
      .catch(console.error);
  };
};

// регистрация
export const postRegistration = (form) => {
  return function (dispatch) {
    request("auth/register", postHeadLogin(form))
      .then((data) => {
        dispatch({
          type: REGISTRATION,
          user: data,
        });
      })
      .catch(console.error);
  };
};

//востоновление пароля
export const postForgotPassword = (form) => {
  return function (dispatch) {
    request("password-reset", postHeadLogin(form))
      .then((data) => {
        dispatch({
          type: FORGOT_PASSWORD,
          user: data,
        });
      })
      .catch(console.error);
  };
};

// изменение пароля
export const postResetPassword = (form) => {
  return function (dispatch) {
    request("password-reset/reset", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(form),
    })
      .then((data) => {
        dispatch({
          type: RESET_PASSWORD,
          user: data,
        });
      })
      .catch(console.error);
  };
};

// авторизация
export const postLogin = (form) => {
  return function (dispatch) {
    request("auth/login", postHeadLogin(form))
      .then((data) => {
        dispatch({
          type: LOGIN,
          user: data,
        });
      })
      .catch(console.error);
  };
};

// выход из личного кабинете
export const postLogOut = (token) => {
  return function (dispatch) {
    request("auth/logout", postHeadLogin(token))
      .then((data) => {
        dispatch({
          type: LOGOUT,
          user: data,
        });
      })
      .catch(console.error);
  };
};

// получение данных пользователя
export const getProfi = () => {
  return function (dispatch) {
    request(`auth/user`, authHead())
      .then((data) => {
        dispatch({
          type: GET_PROFILE,
          user: data,
        });
      })
      .catch(console.error);
  };
};

// изменение данных пользователя
export const patchProf = (form, method) => {
  return function (dispatch) {
    request("auth/user", authHead(form, method))
      .then((data) => {
        dispatch({
          type: PATCH_PROFILE,
          user: data,
        });
      })
      .catch(console.error);
  };
};

// обновление tokena
export const postToken = (token, method) => {
  return function (dispatch) {
    request("auth/token", authHead(token, method))
      .then((data) => {
        dispatch({
          type: LOGIN,
          user: data,
        });
      })
      .catch(console.error);
  };
};


export const getProfile = (token) => {
  return async (dispatch) => {
    try {
      const res = await request(`auth/user`, authHead());
      return await dispatch({
        type: GET_PROFILE,
        user: res,
      });
    } catch (err) {
      if (err.message === "jwt expired") {
        return await dispatch(postToken(token, "POST"));
      } else {
        return Promise.reject(err);
      }
    }
  };
};


export const patchProfile = (form, token) => {
  return async (dispatch) => {
    try {
      dispatch(patchProf(form, "PATCH"));
    } catch (err) {
      if (err.message === "jwt expired") {
        await dispatch(postToken(token));
        const res = await request("auth/user", authHead(form, "PATCH"));
        dispatch({
          type: PATCH_PROFILE,
          user: res,
        });
      } else {
        throw new Error(err);
      }
    }
  };
};
 export const postOrder = (form) => {
    return async (dispatch) => {
      try {
        dispatch(postOrders(form));
      } catch (err) {
        if (err.message === "jwt expired") {
          await dispatch(postToken({token:refreshToken}));
          await new Promise((resolve) => setTimeout(resolve, 2000));
          const res = request(`orders`, authHead(form, "POST"));
          dispatch({
            type: POST_BURGER,
            order: res,
          });
        } else {
          return Promise.reject(err);
        }
      }
    };
  };


























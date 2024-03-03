import { Dispatch } from "redux";
import { getCookie, setCookie } from "../../utils/cookie";
import {
  IItem,
  authHead,
  authHeadToken,
  postHead,
  postHeadLogin,
  request,
} from "../../utils/utils";

export const GET_DATA: "GET_DATA" = "GET_DATA";
export const GET_DATA_SUCCESS: "GET_DATA_SUCCESS" = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED: "FETCH_DATA_FAILURE" = "FETCH_DATA_FAILURE";
export const POST_BURGER: "POST_BURGER" = "POST_BURGER";

export const REGISTRATION: "REGISTRATION" = "REGISTRATION";
export const FORGOT_PASSWORD: "FORGOT_PASSWORD" = "FORGOT_PASSWORD";
export const CLEAN: "CLEAN" = "CLEAN";
export const RESET_PASSWORD: "RESET_PASSWORD" = "RESET_PASSWORD";
export const LOGIN: "LOGIN" = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_PROFILE = "GET_PROFILE";
export const PATCH_PROFILE = "PATCH_PROFILE";
export const POST_PROFILE = "POST_PROFILE";
export const REFRESH_TOKEN = "REFRESH_TOKEN";
const refreshTok = getCookie("refreshToken");
const token = getCookie("token");


export type TIngrActions = {
  readonly type: typeof GET_DATA_SUCCESS;
  readonly data: {
    data:IItem[];
    success:boolean
  };
  }

type TRegistration = {
  readonly type: typeof REGISTRATION;
  user: {
    readonly success: boolean;
    readonly user: object[];
  } 
};
type TForgotPassword = {
  readonly type: typeof FORGOT_PASSWORD;
  user: {
    readonly success: boolean;
    readonly user: object[];
  }
};
type TClean = {
  readonly type: typeof CLEAN;
};
type TResetPassword = {
  readonly type: typeof RESET_PASSWORD;
  readonly user: object[];
};
type TLogin = {
  readonly type: typeof LOGIN;
  readonly user: {
    refreshToken:string;
    accessToken:string
    success:boolean
    user: object[]
  };
  // readonly  authToken: token;
};
type TLogout = {
  readonly type: typeof LOGOUT;
  readonly logout: object[];
  // readonly  accessToken: ;
  readonly user: object[];
};
type TGetProfile = {
  readonly type: typeof GET_PROFILE;
  readonly user: {
    readonly user:{
      readonly  email:string
      readonly name:string
    }
  };
  
  readonly email: string;
  readonly name: string;
};
type TPatchProfile = {
  readonly type: typeof PATCH_PROFILE;
  readonly user:{
    user:{
    readonly  email:string
    readonly name:string
    readonly user: object[]
    }
  }
};
  // readonly user: object[];


export type TApiActions = 
TPatchProfile
|TGetProfile
|TLogout
|TLogin
|TResetPassword
|TClean
|TForgotPassword
|TRegistration

// получение ингредиентов
export const getData = () => {
  return function (dispatch: Dispatch) {
    request(`ingredients`)
      .then((data) => {
        dispatch({
          type: GET_DATA_SUCCESS,
          data: data,
        });
      })
      .catch(console.error);
  };
};
type TFun = ReturnType<typeof getData>;

//отправка заказа
export const postO = (form: object) => {
  return function (dispatch: Dispatch) {
    request(`orders`, authHead(form, "POST"))
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
export const postRegistration = (form: object) => {
  return function (dispatch: Dispatch) {
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
export const postForgotPassword = (form: object) => {
  return function (dispatch: Dispatch) {
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
export const postResetPassword = (form: object) => {
  return function (dispatch: Dispatch) {
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
export const postLogin = (form: object) => {
  return function (dispatch: Dispatch) {
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
export const postLogOut = (token: object) => {
  return function (dispatch: Dispatch) {
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
  return function (dispatch: Dispatch) {
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
export const patchProf = (form: object, method: string) => {
  return function (dispatch: Dispatch) {
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
export const postToken = (token: object, method: string) => {
  return function (dispatch: Dispatch) {
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






























































// export const getProfile = (token:object) => {
//   return async (dispatch:Dispatch) => {
//     try {
//       const res = await request(`auth/user`, authHead());
//       return await dispatch({
//         type: GET_PROFILE,
//         user: res,
//       });
//     } catch (err) {
//       console.log(err)
//     }
//   };
// };

// export const postOrder = (form:object) => {
//   return async (dispatch:Dispatch) => {
//     try {
//       const res = await request(`orders`, authHead(form, "POST")).then(
//         (data) => {
//           dispatch({
//             type: POST_BURGER,
//             order: data,
//           });
//         }
//       );
//     } catch (err) {
//       console.log(err)
//     }
//   };
// };

// export const patchProfile = (form:object) => {
//   return async (dispatch:Dispatch) => {
//     try {
//       const res = await request("auth/user", authHead(form, "PATCH")).then(
//         (data) => {
//           dispatch({
//             type: PATCH_PROFILE,
//             user: data,
//           });
//         }
//       );
//     } catch (err) {
//       console.log(err)
//     }
//   };
// };

































































// export const patchProfile = (form:object, token:string) => {
//   return async (dispatch:Dispatch) => {
//     try {
//       const res = await request("auth/user", authHead(form, "PATCH")).then(
//         (data) => {
//           dispatch({
//             type: PATCH_PROFILE,
//             user: data,
//           });
//         }
//       );
//     } catch (err) {
//       if (err.message === "jwt expired") {
//         const refreshT = await request("auth/token", postHeadLogin(token));
//         let tokenn = refreshT.accessToken.split("Bearer ")[1];
//         setCookie("token", tokenn);
//         setCookie("refreshToken", refreshT.refreshToken);
//         if (refreshT.success) {
//           const res = await request(
//             "auth/user",
//             authHeadToken(form, tokenn, "PATCH")
//           ).then((data) => {
//             dispatch({
//               type: PATCH_PROFILE,
//               user: data,
//             });
//           });
//         } else {
//           throw new Error(err);
//         }
//       }
//     }
//   };
// };



// export const postOrder = (form:object) => {
//   return async (dispatch:Dispatch) => {
//     try {
//       const res = await request(`orders`, authHead(form, "POST")).then(
//         (data) => {
//           dispatch({
//             type: POST_BURGER,
//             order: data,
//           });
//         }
//       );
//     } catch (err) {
//       // console.log(err.message === "jwt expired")
//       if (err.message === "jwt expired") {
//         const refreshT = await request("auth/token", postHeadLogin(token));
//         let tokenn = refreshT.accessToken.split("Bearer ")[1];
//         setCookie("token", tokenn);
//         setCookie("refreshToken", refreshT.refreshToken);
//         if (refreshT.success) {
//           const res = await request()}

//         const res = await request(`orders`, authHead(form, "POST")).then(
//           (data) => {
//             dispatch({
//               type: POST_BURGER,
//               order: data,
//             });
//           }
//         );
//       } else {
//         return Promise.reject(err);
//       }
//     }
//   };
// };
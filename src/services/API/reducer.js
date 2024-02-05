import { setCookie } from "../../utils/cookie";
import {
  REGISTRATION,
  GET_DATA_SUCCESS,
  FORGOT_PASSWORD,
  CLEAN,
  RESET_PASSWORD,
  LOGIN,
  LOGOUT,
  GET_PROFILE,
  PATCH_PROFILE,
  GET_ORDER,
} from "./action";

const initialState = {
  data: [],
  dataSuccess: false,
  dat: false,
  dataName: [],
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: [state.data, ...action.data],
        dataSuccess: action.success,
        dat: action.dat,
      };
    }
    default: {
      return state;
    }
  }
};

const initialRegistration = {
  user: [],
  success: false,
  userEmail: [],
  successEmail: false,
  refreshToken: [],
  successToken: [],
  logout: [],
  email: "",
  name: "",
  password: null,
  order:[]
};

export const registrationReducer = (state = initialRegistration, action) => {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...state,
        user: [action.user],
        success: action.user.success,
      };
    case FORGOT_PASSWORD:
      return {
        ...state,
        userEmail: [action.user],
        successEmail: action.user.success,
      };
    case CLEAN:
      return {
        ...state,
        successEmail: false,
        userEmail: [],
        user: [],
        success: false,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        user: action.user,
      };
    case LOGIN:
      let token = action.user.accessToken.split("Bearer ")[1];
      let refreshToken = action.user.refreshToken;
      setCookie("token", token);
      setCookie("refreshToken", refreshToken);
      return {
        ...state,
        user: action.user,
        authToken: token,
        success: action.user.success,
      };
    case LOGOUT:
      return {
        ...state,
        logout: action.user,
        accessToken: action.user.refreshToken,
        user: [],
      };
    case GET_PROFILE:
      return {
        ...state,
        email: action.user.user.email,
        name: action.user.user.name,
      };
    case PATCH_PROFILE:
      return {
        ...state,
        email: action.user.user.email,
        name: action.user.user.name,
        user: action.user,
      };
      case GET_ORDER:
        return {
          ...state,
          order:action.messages
        }
    default: {
      return state;
    }
  }
};

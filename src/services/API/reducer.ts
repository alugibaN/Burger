import { setCookie } from "../../utils/cookie.jsx";
import { IItem } from "../../utils/utils";
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
  TApiActions,
  TIngrActions,
  // GET_ORDER,
  // getProfile,
} from "./action";

type TInitialState = {
  data: IItem[];
  dataSuccess: boolean;
  dat: boolean;
}

const initialState: TInitialState = {
  data: [],
  dataSuccess: false,
  dat: false,
};

export const ingredientReducer = (
  state = initialState,
  action: TIngrActions
): TInitialState => {
  switch (action.type) {
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        data: [...state.data, ...action.data.data],
        dataSuccess: action.data.success,
        dat: true,
      };
    }
    default: {
      return state;
    }
  }
};

type TInitialRegistration = {
  user: object;
  success: boolean;
  userEmail: object[];
  successEmail: boolean;
  logout: object[];
  email: string;
  name: string;
  password: null;
  order: object[];
  status: boolean;
}

const initialRegistration:TInitialRegistration = {
  user: [],
  success: false,
  userEmail: [],
  successEmail: false,
  logout: [],
  email: "",
  name: "",
  password: null,
  order: [],
  status: false,
};

export const registrationReducer = (
  state = initialRegistration,
  action: TApiActions
):TInitialRegistration => {
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
        success:true
      };
    case LOGIN:
      let token = action.user.accessToken.split("Bearer ")[1];
      let refreshToken = action.user.refreshToken;
      setCookie("token", token);
      setCookie("refreshToken", refreshToken);
      return {
        ...state,
        user: action.user,
        // authToken: token,
        success: action.user.success,
      };
    case LOGOUT:
      return {
        ...state,
        logout: action.user,
        success:false,
        // accessToken: action.user.refreshToken,
        user: [],
      };
    case GET_PROFILE:
      return {
        ...state,
        user: action.user,
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
    default: {
      return state;
    }
  }
};

// case REFRESH_TOKEN:
//       let accessToken = action.user.accessToken.split("Bearer ")[1];
//       setCookie("token", accessToken);
//       return {
//         ...state,
//         user: action.user,
//         authToken: accessToken,
//         success: action.user.success,
//       };

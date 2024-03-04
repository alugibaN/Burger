import { authHead, request } from "../../utils/utils";
import { Dispatch } from "redux";

export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS: "WS_CONNECTION_SUCCESS" =
  "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR: "WS_CONNECTION_ERROR" = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" =
  "WS_CONNECTION_CLOSED";
export const WS_GET_MESSAGE: "WS_GET_MESSAGE" = "WS_GET_MESSAGE";
export const WS_SEND_MESSAGE: "WS_SEND_MESSAGE" = "WS_SEND_MESSAGE";
export const WS_CONNECTION_START_AUTH: "WS_CONNECTION_START_AUTH" =
  "WS_CONNECTION_START_AUTH";
export const GET_ORDER: "GET_ORDER" = "GET_ORDER";
export const WS_CONNECTION_CLOSE: "WS_CONNECTION_CLOSE" = "WS_CONNECTION_CLOSE";

interface IMessages {
  orders: {
    id: string;
  };
}

export interface IIngr {
  ingredients: string;
  _id: string;
  number: number;
  name: string;
  status?: string | undefined;
  image_mobile?: string | undefined;
  createdAt: string;
  updatedAt?: string | undefined;
}

// interface OrderSummary {
//   totalToday?: number | undefined;
//   total?: number | undefined;
//   success?: boolean | undefined;
// }
export type Ipayload = {
  orders?: IIngr[] | undefined;
  totalToday?: number | undefined;
  total?: number | undefined;
  success?: boolean | undefined;
};

// orders?: {
//   ingredients: string;
//   _id: string;
//   number: number;
//   name: string;
//   status?:string;
//   image_mobile?: string;
//   createdAt: string;
//   updatedAt?:string
// }[];
// totalToday?: number;
// total?: number;
// success?: boolean;

type TWsConnectionStart = {
  readonly type: typeof WS_CONNECTION_START;
};
type TWsConnectionSuccess = {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  payload: object;

};
type TWsConnectionError = {
  readonly type: typeof WS_CONNECTION_ERROR;
  // readonly error: {
  payload: object;
  // };
};
type TWsConnectionClosed = {
  readonly type: typeof WS_CONNECTION_CLOSED;
};

type TWsConnectionStartAuth = {
  readonly type: typeof WS_CONNECTION_START_AUTH;
};
type TWsGetMessage = {
  readonly type: typeof WS_GET_MESSAGE;
  payload: Ipayload;
};

type TWGetOrder = {
  readonly type: typeof GET_ORDER;
  readonly messages: Ipayload;
};
export type TWSActions =
  | TWsConnectionStart
  | TWsConnectionSuccess
  | TWsConnectionError
  | TWsConnectionClosed
  | TWsConnectionClosed
  | TWsGetMessage
  | TWGetOrder
  | TWsConnectionStartAuth;

// получение заказа
export const getOrder = (order: string | undefined) => {
  return function (dispatch: Dispatch) {
    request(`orders/{${order}}`, authHead())
      .then((data) => {
        dispatch({
          type: GET_ORDER,
          messages: data,
        });
      })
      .catch(console.error);
  };
};

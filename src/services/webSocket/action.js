import { getCookie } from "../../utils/cookie";
import { authHead, request } from "../../utils/utils";
import { postToken } from "../API/action";

export const WS_CONNECTION_START = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_GET_MESSAGE = "WS_GET_MESSAGE";
export const WS_SEND_MESSAGE = "WS_SEND_MESSAGE";
export const WS_CONNECTION_START_AUTH = "WS_CONNECTION_START_AUTH";
export const GET_ORDER = "GET_ORDER";

export const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
};

// получение заказа
export const getOrder = (order) => {
  return function (dispatch) {
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


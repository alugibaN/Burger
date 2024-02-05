// socketMiddleware.js
// import type { Middleware, MiddlewareAPI } from 'redux';

import { getCookie } from "../../utils/cookie";

export const socketMiddleware = (wsUrl) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const authToken = getCookie('token')

      if (type === "WS_CONNECTION_START") {
        // объект класса WebSocket
        socket = new WebSocket(`${wsUrl}/all`);
      }
      if (type === "WS_CONNECTION_START_AUTH") {
        // объект класса WebSocket
        socket = new WebSocket(`${wsUrl}?token=${authToken}`)
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = (event) => {
          dispatch({ type: "WS_CONNECTION_SUCCESS", payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event) => {
          dispatch({ type: "WS_CONNECTION_ERROR", payload: event });
        };

        // функция, которая вызывается при получении события от сервера
        socket.onmessage = (event) => {
          const { data } = event;
          if (data) {
            dispatch({ type: "WS_GET_MESSAGE", payload: JSON.parse(data) });
          }
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event) => {
          dispatch({ type: "WS_CONNECTION_CLOSED", payload: event });
        };

        if (type === "WS_SEND_MESSAGE") {
          const message = payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  };
};

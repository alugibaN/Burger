// // socketMiddleware.js
// // import type { Middleware, MiddlewareAPI } from 'redux';
// import WebSocket from 'ws';
import { Middleware } from 'redux';
// import { getCookie } from "../../utils/cookie";
// interface User {
//   name: string;
//   age: number;
// }
import { MiddlewareAPI } from "redux";
import { getCookie } from "../../utils/cookie.jsx";
import { AppDispatch, RootState } from '../../utils/types';

export const socketMiddleware = (wsUrl: string):Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const authToken = getCookie("token");

      if (type === "WS_CONNECTION_START") {
        // объект класса WebSocket
        socket = new WebSocket(`${wsUrl}/${payload}`);
      }
      if (type === "WS_CONNECTION_START_AUTH") {
        // объект класса WebSocket
        socket = new WebSocket(`${wsUrl}?token=${authToken}`);
      }
      if (socket && type === "WS_CONNECTION_CLOSED") {
        // Закрываем соединение
        socket.close();
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

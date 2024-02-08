import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, GET_ORDER } from "./action";

const initialState = {
  wsConnected: false,
  messages: [],
    error: undefined,
    orders:[]
};

// Создадим редьюсер для WebSocket
export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
        // Опишем обработку экшена с типом WS_CONNECTION_SUCCESS
        // Установим флаг wsConnected в состояние true
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
                error: undefined,
        wsConnected: true,
        
      };

        // Опишем обработку экшена с типом WS_CONNECTION_ERROR
        // Установим флаг wsConnected в состояние false и передадим ошибку из action.payload
    case WS_CONNECTION_ERROR:
      return {
        ...state,
                error: action.payload,
        wsConnected: false
      };

        // Опишем обработку экшена с типом WS_CONNECTION_CLOSED, когда соединение закрывается
        // Установим флаг wsConnected в состояние false
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
                error: undefined,
        wsConnected: false,
        orders:'закрыто'
      };

        // Опишем обработку экшена с типом WS_GET_MESSAGE
        // Обработка происходит, когда с сервера возвращаются данные
        // В messages передадим данные, которые пришли с сервера
    case WS_GET_MESSAGE:
      return {
        ...state,
                error: undefined,
        messages: action.payload,
        // orders:[...state.messages, action.payload.orders]
      };
      case GET_ORDER:
        return {
          ...state,
          messages:action.messages
        }
    default:
      return state;
  }
};
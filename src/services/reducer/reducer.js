import { combineReducers } from 'redux';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SUM_PRICES':
      const totalSum = action.items.reduce((sum, item) => sum + item.price, 0);
      return { totalSum };
      case 'REMOVE_PRICE':
        return  {totalSum:'0'}
    default:
      return state;
  }
};

const CLOSE_INGREDIENT = 'CLOSE_INGREDIENT'; // Исправление опечатки
const CLOSE_ORDER = 'CLOSE_ORDER'; // Исправление опечатки
const OPEN_INGREDIENT = 'OPEN_INGREDIENT';
const OPEN_ORDER = 'OPEN_ORDER';
const initialState = {
  ingredientModal: true,
  orderModal: false, 
  ingredientModalState: []
};

export const showModal = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_INGREDIENT: // Исправление константы
      return { 
        ...state,
        ingredientModal: false,
        ingredientModalState: []
      };
    case CLOSE_ORDER: // Исправление константы
      return {
        ...state,
        orderModal: false
      };
    case OPEN_INGREDIENT:
      return {
        ...state,
        ingredientModal: true
      };
    case OPEN_ORDER:
      return {
        ...state,
        orderModal: true
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  showModal
});
console.log(initialState)

///
//
//
//
//
//
//
//
//
//
//
//
//

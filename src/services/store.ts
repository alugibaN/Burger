import { combineReducers } from 'redux';
import { modalReducer } from './modal/reducer';
import { ingredientReducer, registrationReducer } from './API/reducer';
import { menuReducer } from './activMenu/reducer';
import { constructorIngredientReducer } from './addIngredient/reducer'
import { wsReducer } from './webSocket/reducer';


export const rootReducer = combineReducers({
  card: ingredientReducer,
  modal: modalReducer,
  ingr: constructorIngredientReducer,
  menu: menuReducer,
  registration: registrationReducer,
  ws: wsReducer,
})

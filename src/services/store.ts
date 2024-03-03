import { combineReducers } from 'redux';
import { modalReducer } from './Modal/reducer';
import { ingredientReducer, registrationReducer } from './API/reducer';
import { menuReducer } from './ActivMenu/reducer';
import { constructorIngredientReducer } from './AddIngredient/reducer'
import { wsReducer } from './webSocket/reducer';


export const rootReducer = combineReducers({
  card: ingredientReducer,
  modal: modalReducer,
  ingr: constructorIngredientReducer,
  menu: menuReducer,
  registration: registrationReducer,
  ws: wsReducer,
})

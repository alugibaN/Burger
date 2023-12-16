import { v4 as uuid4 } from 'uuid';

export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_BUN = 'ADD_BUN'
export const SUM_PRICES = 'SUM_PRICES'
export const BURGER_ID = 'BURGER_ID'
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
export const POST_BURGER = 'POST_BURGER'
export const COUNTER_INGREDIENT ='COUNTER_INGREDIENT'

export const addIngredient = (item) => {
  return {
      type: ADD_INGREDIENT,
      ingredient: {
          ...item, // используем `spread`, чтобы поменять ссылку на объект. Таким образом `redux` обновит его в хранилище
         uniqueId: uuid4()  // и добавляем в объект новое поле, которое потом будет использовано в `key`
      }
      
  }
}

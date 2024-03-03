import { v4 as uuid4 } from "uuid";
import { IItem } from "../../utils/utils";

export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";
export const ADD_BUN: "ADD_BUN" = "ADD_BUN";
export const SUM_PRICES: "SUM_PRICES" = "SUM_PRICES";
export const BURGER_ID: "BURGER_ID" = "BURGER_ID";
export const MOVE_INGREDIENT: "MOVE_INGREDIENT" = "MOVE_INGREDIENT";
export const REMOVE_INGREDIENT: "REMOVE_INGREDIENT" = "REMOVE_INGREDIENT";
export const POST_BURGER: "POST_BURGER" = "POST_BURGER";
export const COUNTER_INGREDIENT: "COUNTER_INGREDIENT" = "COUNTER_INGREDIENT";

export interface IOrder { 
  name: string; 
  order: { 
    number: number; 
  }; 
}

type TAddPrice = {
  readonly type: typeof SUM_PRICES;
  arr: object[];
}
type TAddIdIngredients = {
  readonly type: typeof BURGER_ID;
  idIngr: object[];
}
type TAddItemIngredients = {
  type: typeof ADD_INGREDIENT;
  ingredient: {
     uniqueId: string;
  };
}
type TAddBun = {
  readonly type: typeof ADD_BUN;
  bun: IItem;
}
type TRemoveIngredient = {
  readonly type: typeof REMOVE_INGREDIENT;
  ingr:IItem;
}
type TSumPrice = {
    readonly type: typeof SUM_PRICES;
}
type TBurgerId = {
  readonly type: typeof BURGER_ID;
}
type TMoveIngredient = {
  readonly type: typeof MOVE_INGREDIENT;
  fromIndex: number;
  toIndex: number;
}

type TPostBurger = { 
  readonly type: typeof POST_BURGER; 
  order: IOrder; 
  bun: object[]; 
  burgerIngredients: object[]; 
  flag: boolean; 
}

export type TAddIngrActions =
  |TAddItemIngredients
  | TAddBun
  | TRemoveIngredient
  | TSumPrice
  | TBurgerId
  | TMoveIngredient
  | TPostBurger;

export const addIngredient = (item: object): TAddItemIngredients => {
  return {
    type: ADD_INGREDIENT,
    ingredient: {
      ...item, // используем `spread`, чтобы поменять ссылку на объект. Таким образом `redux` обновит его в хранилище
      uniqueId: uuid4(), // и добавляем в объект новое поле, которое потом будет использовано в `key`
    },
  };
};



























// interface III {
//   bun:{
//     price: number
//   }
//   burgerIngredients:{
//     price:number
//   }
// }





// export const addPrice = (
//   bun: {price:number}[],
//   burgerIngredients: {price:number}[]
//   ): TAddPrice => {
//   return {
//   type: SUM_PRICES,
  
//   arr: [...bun, ...burgerIngredients],
//   };
//   };
// export const addPrice = (
//   bun: {price:number}[],
//   burgerIngredients: {price:number}[]
// ): TAddPrice => {
//   return {
//     type: SUM_PRICES,
//     arr: [...bun, ...burgerIngredients, ...bun],
//   };
// };
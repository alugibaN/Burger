import { IItem } from "../../utils/utils";
import {
  ADD_BUN,
  ADD_INGREDIENT,
  BURGER_ID,
  IOrder,
  MOVE_INGREDIENT,
  POST_BURGER,
  REMOVE_INGREDIENT,
  SUM_PRICES,
  TAddIngrActions,
} from "./action";




type TIitialBurgerState = { 
  ingredients: string[]; 
  bun: IItem[]; 
  burgerIngredients: { 
    uniqueId?: string 
    price?:number;
    _id?:string
  }[]; 
  totalSum: number; 
  flag: boolean; 
  order: IOrder;
};

const initialBurgerState:TIitialBurgerState = {
  ingredients: [],
  bun: [],
  burgerIngredients: [],
  totalSum: 0,
  flag: false,
  order: { name: "", order: { number: 0 } },
};

export const constructorIngredientReducer = (
  state = initialBurgerState,
  action:TAddIngrActions
):TIitialBurgerState => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        burgerIngredients: [...state.burgerIngredients, action.ingredient],
      };
    case ADD_BUN:
      return {
        ...state,
        bun: [action.bun],
        flag: true,
      };
      
    case REMOVE_INGREDIENT:
      return {
        ...state,
        burgerIngredients: state.burgerIngredients.filter(
          (ingredient) => ingredient.uniqueId !== action.ingr.uniqueId
        ),
      };

      case SUM_PRICES:
        const total = [...state.bun, ...state.burgerIngredients, ...state.bun].reduce(
          (sum:number, item):number => {
            if(item && item.price) {
           return  sum + item.price
            }
            return sum;
          },
          0
        )
        return {
          ...state,
          totalSum:  total
        };
    case BURGER_ID:
      const id = [...state.bun, ...state.burgerIngredients, ...state.bun].map((el) => el._id?el._id:'');
      return {
        ...state,
        ingredients: id,
      };
    case MOVE_INGREDIENT:
      const updatedIngredients = [...state.burgerIngredients];
      const [draggedIngredient] = updatedIngredients.splice(
        action.fromIndex,
        1
      );
      updatedIngredients.splice(action.toIndex, 0, draggedIngredient);

      return {
        ...state,
        burgerIngredients: updatedIngredients,
      };
    case POST_BURGER:
      return {
        ...state,
        order: action.order,
        bun: [],
        burgerIngredients: [],
        flag:false
      };

    default:
      return state;
  }
};

import {
  ADD_BUN,
  ADD_INGREDIENT,
  BURGER_ID,
  MOVE_INGREDIENT,
  POST_BURGER,
  REMOVE_INGREDIENT,
  SUM_PRICES,
} from "./action";

const initialBurgerState = {
  ingredients: [],
  bun: [],
  burgerIngredients: [],
  totalSum: "0",
  flag: false,
  order: [],
};

export const constructorIngredientReducer = (
  state = initialBurgerState,
  action
) => {
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
      return {
        ...state,
        totalSum: [...action.arr, ...state.bun].reduce(
          (sum, item) => sum + item.price,
          0
        ),
      };
    case BURGER_ID:
      const id = action.idIngr.map((el) => {
        return el._id;
      });
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
      };

    default:
      return state;
  }
};

import {
  CLOUSE_MODAL_INGREDIENT,
  CLOUSE_MODAL_ORDER,
  OPEN_MODAL_INGREDIENT,
  OPEN_MODAL_ORDER,
  TModalActions,
} from "./action";

type TinitialModalState = {
  openModalIngredient: boolean;
  openModalOrder: boolean;
  ingredient: object;
}

const initialModalState: TinitialModalState = {
  openModalIngredient: false,
  openModalOrder: false,
  ingredient: [],
};

export const modalReducer = (
  state = initialModalState,
  action: TModalActions
): TinitialModalState => {
  switch (action.type) {
    case OPEN_MODAL_INGREDIENT: {
      return {
        ...state,
        openModalIngredient: true,
        ingredient: action.ingredient?action.ingredient:[],
      };
    }
    case OPEN_MODAL_ORDER: {
      return {
        ...state,
        openModalOrder: true,
      };
    }
    case CLOUSE_MODAL_INGREDIENT: {
      return {
        ...state,
        openModalIngredient: false,
        ingredient: [],
      };
    }
    case CLOUSE_MODAL_ORDER: {
      return {
        ...state,
        openModalOrder: false,
      };
    }
    default: {
      return state;
    }
  }
};

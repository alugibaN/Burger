import { CLOUSE_MODAL_INGREDIENT, CLOUSE_MODAL_ORDER, OPEN_MODAL_INGREDIENT, OPEN_MODAL_ORDER } from "./action";

const initialModalState = {
  openModalIngredient: false,
  openModalOrder: false,
  ingredient: null
};



export const changeModal = (state = initialModalState, action) => {

  switch (action.type) {
    case OPEN_MODAL_INGREDIENT: {
      return {
        ...state,
        openModalIngredient: true,
        ingredient: action.ingredient
      }
    }
    case OPEN_MODAL_ORDER: {
      return {
        ...state,
        openModalOrder: true
      }
    }
    case CLOUSE_MODAL_INGREDIENT: {
      return {
        ...state,
        openModalIngredient: false,
        ingredient: []
      }
    }
    case CLOUSE_MODAL_ORDER: {
      return {
        ...state,
        openModalOrder: false
      }
    }
    default: {
      return state
    }
  }
}
import { ACTIV_MENU } from "./action"

const initialActivMenu = {
  activ: 'bun'
}
 export const addActivMenu = (state = initialActivMenu, action) => {
  switch (action.type) {
    case ACTIV_MENU: {
      return {
        ...state,
        activ: action.activ
      }
    } default: {
      return state
    }
  }
}
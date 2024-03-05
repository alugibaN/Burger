import { ACTIV_MENU, TActivMenu } from "./action";

export type TInitialActivMenu = {
  activ: string
}

const initialActivMenu:TInitialActivMenu = {
  activ: "bun",
};
export const menuReducer = (state = initialActivMenu, action:TActivMenu):TInitialActivMenu => {
  switch (action.type) {
    case ACTIV_MENU: {
      return {
        ...state,
        activ: action.activ,
      };
    }
    default: {
      return state;
    }
  }
};

export const OPEN_MODAL_INGREDIENT: "OPEN_MODAL_INGREDIENT" =
  "OPEN_MODAL_INGREDIENT";
export const  OPEN_MODAL_ORDER: "OPEN_MODAL_ORDER" = "OPEN_MODAL_ORDER";
export const CLOUSE_MODAL_INGREDIENT: "CLOUSE_MODAL_INGREDIENT" =
  "CLOUSE_MODAL_INGREDIENT";
export const CLOUSE_MODAL_ORDER: "CLOUSE_MODAL_ORDER" = "CLOUSE_MODAL_ORDER";

type TOpenModalIngredient = {
  readonly type : typeof OPEN_MODAL_INGREDIENT;
  readonly openModalIngredient: boolean;
  readonly ingredient?: object;
};
type TOpenModalOrder = {
  readonly type: typeof OPEN_MODAL_ORDER;
  readonly openModalOrder?: boolean;
};
type TClouseModalIngredient = {
  readonly type: typeof CLOUSE_MODAL_INGREDIENT
};
type TClouseModalOrder = {
  readonly type: typeof CLOUSE_MODAL_ORDER;
};

export type TModalActions =
  | TOpenModalIngredient
  | TOpenModalOrder
  | TClouseModalIngredient
  | TClouseModalOrder
  |TClouseModalIngredient

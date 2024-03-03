export const ACTIV_MENU:'ACTIV_MENU' = 'ACTIV_MENU'

export type TActivMenu  = {
  readonly type: typeof ACTIV_MENU
  readonly activ: string;
}

export const activMenu = (ingredient:string):TActivMenu=>({
  type: ACTIV_MENU,
  activ: ingredient,
})



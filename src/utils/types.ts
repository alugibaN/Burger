import { store } from "..";
import { TApiActions, TIngrActions } from "../services/API/action";
import { TAddIngrActions } from "../services/AddIngredient/action";
import { TModalActions } from "../services/Modal/action";
import { TWSActions } from "../services/webSocket/action";
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TActivMenu } from "../services/ActivMenu/action";
import { Dispatch } from "react";

 export type TApplicationActions = 
|TActivMenu
| TAddIngrActions
| TApiActions
| TIngrActions
|TModalActions
|TWSActions

export type RootState = ReturnType<typeof store.getState>; 

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>; 

export type AppDispatch = typeof store.dispatch; 

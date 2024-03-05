import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { AppThunk, RootState, TApplicationActions } from '../types';
import { ThunkDispatch } from 'redux-thunk';
import { store } from '../..';


// Теперь этот хук знает структуру хранилища
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook; 
// hooks.ts

// // Хук не даст отправить экшен, который ему не знаком
// export const useDispatch = () => dispatchHook<AppDispatch>(); 
export type AppDispatch = ThunkDispatch<RootState, any, TApplicationActions>;
// export type AppDispatch = typeof store.dispatch


export const useDispatch: () => AppDispatch = dispatchHook;
// type DispatchFunc = () => AppDispatch

// export const useDispatch: DispatchFunc = dispatchHook
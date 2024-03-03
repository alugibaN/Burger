import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { AppThunk, RootState, TApplicationActions } from './types';
import { ThunkDispatch } from 'redux-thunk';


// Теперь этот хук знает структуру хранилища
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook; 
// hooks.ts

// // Хук не даст отправить экшен, который ему не знаком
// export const useDispatch = () => dispatchHook<AppDispatch>(); 
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;

export const useDispatch: () => AppDispatch = dispatchHook;
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import {createContext, useState, useMemo, useCallback, useEffect, useReducer} from "react";
import {reducer} from './reducer/reducer'
import { initialState } from "./action/action";

export const ingredientsContext = createContext('')


export function GetCardIngredient({children}){
 const [ingredient, setIngredient]=useState([])
 const [bulka, setBulka] = useState([])
 const [burger, setBurger] = useState([])
 const [flag, setFlag] = useState(false);
 const [details, setDetails] = useState([]) 
 const url ='https://norma.nomoreparties.space/api/orders'

 const addBulka = useCallback((el) => {
    setBulka([el]);
    setBurger((prev) => [
      ...prev.filter((item) => {
      if(item._id !== el._id0){
        burger.splice(item, 1)
      }}), // Удаление предыдущего значения _id
       el._id,
    ]);
 }, []);

 const getData = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Устанавливаем заголовок для JSON данных
  },
  body: JSON.stringify({ingredients:burger}), // Преобразуем данные в формат JSON и отправляем
 }

const addIngredient = useCallback((el) => {
   setIngredient(prevIngredient => [...prevIngredient, el,])
   setBurger(prevIngredient => [...prevIngredient, el._id,]);
}, []);

  const removeIngredient = useCallback(id =>{
  const removeEl = ingredient.find(el => el._id === id)
 ingredient.splice(removeEl,1)
 },[])

 const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    const burger = [...bulka, ...ingredient];
    dispatch({ type: 'SUM_PRICES', items: burger });
  }, [bulka,ingredient])
  
  useEffect(()=>{
    const postData = async () => {
      try {
          const response = await fetch(url, getData)
          if (!response.ok) {
            throw new Error('Network response was not ok'); // Will be caught by catch block
          }
          const result = await response.json();
          setDetails(result);
          setFlag(false)
          setBulka([])
          setIngredient([])
          dispatch({type: 'REMOVE_PRICE'})
      } catch (error) {
          console.error('Ошибка:', error);
      }
  };

  if(flag){
    postData()
  }
  }, [flag ===true])

  return (
    <ingredientsContext.Provider value={{ingredient, addIngredient, bulka, addBulka, removeIngredient,  state, setFlag, flag, details}}>
      {children}
    </ingredientsContext.Provider>
  )
}

































// const existingCardIndex = ingredient.findIndex(() => 'bun' === el.type);
//   console.log(existingCardIndex)
//   if (existingCardIndex !== -1) {
//            // Если объект с таким типом уже есть, удаляем его
//            setIngredient((prevCards) =>
//              prevCards.filter((index) => index !== existingCardIndex)
//            );
//          }

// для поиска в масиве ингредиентов булок и удаление первой 

// useEffect(() => {
//   const bunIngredient = ingredient.find(item => item.type === 'bun');
//   const bunFilter =ingredient.filter(item => item.type === 'bun')
//   if(bunFilter.length > 1){
//     ingredient.splice(bunIngredient, 1);
//   }
//   console.log(ingredient);
  
// }, [ingredient]);
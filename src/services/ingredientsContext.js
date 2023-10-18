import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import {createContext, useState, useMemo, useCallback, useEffect} from "react";
export const ingredientsContext = createContext('gggg')


export function GetCardIngredient({children}){
 const [ingredient, setIngredient]=useState([])
 const [bulka, setBulka] = useState([])
  
 
  const addBulka = useCallback((el) => {
    setBulka([el]);
 }, []);

const addIngredient = useCallback((el) => {
   setIngredient(prevIngredient => [...prevIngredient, el]);
}, []);

  const removeIngredient = useCallback(id =>{
  const removeEl = ingredient.find(el => el._id === id)
 ingredient.splice(removeEl,1)
 },[])

  return (
    <ingredientsContext.Provider value={{ingredient, addIngredient, bulka, addBulka, removeIngredient}}>
      {children}
    </ingredientsContext.Provider>
  )
}



//  мне нужно сделать функцию которая будет проходится по стейту находить 
//нужные ингредиенты и добавлять их в бургер конструктор
//1) создать хранилише в которое будет добавлятся обьект при нажатии 
//2) прокинуть эту функцию в функцию которая генирирует ингредиенты 
//чтобы она добавляла в стект текущее значение 
//3) после создать функциию которая будет искать в стейте булки 
//4) создать функцию которая будет удалять из стейта булки 
//5) которая будет удалять из стейта ингредиенты 
//
//
//ОБЯЗАТЕЛЬ! Нужно сделать так чтобы даже после обновления в стейте все сохранялось  


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
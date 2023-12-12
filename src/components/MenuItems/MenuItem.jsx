import React, { useState, useEffect, useCallback } from "react";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import sty from './MenuItem.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import PropTypes from "prop-types";



function MenuItem({type, item}) {
  const {burgerIngredients, bun} = useSelector(state => state.ingr)
 
  const [{isDragging}, dragRef] = useDrag({
    type:type,
    item: item
  })

  const dispatch = useDispatch()

  const openModal = (ingr)=>{
    dispatch({
    type: 'OPEN_MODAL_INGREDIENT',
    ingredient:ingr
})}

     const addIngredient = (ingredient) => {
      dispatch({
        type: 'ADD_INGREDIENT',
        ingredient, 
      });
    };

     const addBun = (bun) => {
      dispatch( {
        type: 'ADD_BUN',
        bun
      });
    };

    const addPrice=()=>{
      return{
       type:'SUM_PRICES',
        arr:[...bun, ...burgerIngredients] 
      }
    }

    const addIdIngredients = () => {
      return{
        type:'BURGER_ID',
        idIngr:[...bun, ...burgerIngredients]
      }
    }

    useEffect(()=>{
      dispatch(addPrice())
      dispatch(addIdIngredients())
    },[bun,burgerIngredients])



  return (
<>
        {item.type === type?
      <li key={item._id} className={`${sty.card} pl-4 pr-4`} ref={dragRef} onClick={()=>{
        if(item.type === 'bun'){
          addBun(item) 
        }else if(bun.length > 0){
          addIngredient(item)
        }
        openModal(item)    
      }}>
        <img className={`mb-1`} alt={item.name} src={item.image} />
        <div className={`${sty.wrap} mb-1`}>
          <p className={`${sty.itle} text text_type_digits-default mr-1`}>{item.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${sty.name} text text_type_main-default`}>{item.name}</p>
      </li>
: 
null
    }
</>
)
    }

export default MenuItem

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  type:PropTypes.string
}






// {types.map(type => {
// 	const itemsOfType = data.filter(item => item.type === type);
// 	if (itemsOfType.length > 0) {
// 		 return (
// 				<>
// 					 <h3 className={` text text_type_main-medium mb-3`}>
// 							{type === 'bun' ? 'Булки' : type === 'sauce' ? 'Соусы' : 'Начинка'}
// 					 </h3>
// 					 {itemsOfType.map(item => (
// 			 <ul className={`${sty.menu} pl-4 pr-4`}>

// 						 <MenuItem item={item}/>
// 						</ul>
// 					 ))}
// 				</>
// 		 );
// 	}
// })}























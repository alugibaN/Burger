import React, { useContext, useState} from "react";
import sty from '../BurgerConstructor/curgerConstructor.module.css'
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from "../modal/ModalOverlay/ModalOverlay";
import IngredientsDetails from "../modal/IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";
import { realContext } from "../../services/constructorContext";
import { ingredientsContext } from "../../services/ingredientsContext";


function BurgerConstructor(props) {
// const data = useContext(realContext)
const {ingredient, bulka, removeIngredient} = useContext(ingredientsContext)


  return (
    
    <section className={`${sty.burgerConstructor} mt-15 ml-5 `}>
      <div  className={sty.topBulka}>
      
         {bulka.map(item =>{
     return (
       <ConstructorElement
       key={item._id}
        type="top"
        isLocked={true}
        text={`${item.name}(верх)`}
        price={`${item.price}`}
        thumbnail={`${item.image_large}`}
      />
        ) })}

      </div>

      <ul className={`${sty.wrap} custom-scroll`}>
        {ingredient.map((item) => {
          if (item.type !== 'bun')
            return <li key={item._id}>

              <button type="button"
                className={sty.ingredients__info}
                onClick={(e)=>{
                  console.log(e.currentTarget)
                }}
              >
                <DragIcon type="primary" />
              </button>
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image_large}
              />
            </li>
        })}
      </ul>
      <div className={sty.bottomBulka}>
            {bulka.map(item =>{
     return (
       <ConstructorElement
       key={item._id}
        type="bottom"
        isLocked={true}
        text={`${item.name}(низ)`}
        price={`${item.price}`}
        thumbnail={`${item.image_large}`}
      />
        ) })}
      </div>
      <div className={`${sty.footer} pt-5`} >
        <div className={`${sty.price} mr-10`}>
          <p className={`${sty.counter} text text_type_main-large mr-2`}>0</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={props.openModal}>
          Оформить заказ
        </Button>
      </div>

    </section>

  )
}

BurgerConstructor.propTypes = {
  // data: PropTypes.arrayOf(PropTypes.object).isRequired, 
   openModal: PropTypes.func.isRequired
}
export default BurgerConstructor
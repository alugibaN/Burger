import React, { useState } from "react";
import sty from '../BurgerConstructor/curgerConstructor.module.css'
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from "../modal/ModalOverlay/ModalOverlay";
import IngredientsDetails from "../modal/IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";


function BurgerConstructor(props) {


  return (
    <section className={`${sty.burgerConstructor} mt-15 ml-5 `}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02-large.png"
      />
      <ul className={`${sty.wrap} custom-scroll`}>
        {props.data.map((item) => {
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
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02-large.png"
      />
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired, 
   openModal: PropTypes.func.isRequired
}
export default BurgerConstructor
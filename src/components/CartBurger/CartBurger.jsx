import React, {useState} from "react"
import sty from '../BurgerIngredients/BurgerIngredients.module.css'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'




function CartBurger(props) {
// const {eat, setEat} = React.useState({data})

return(
    <li key={props.data._id} className={`${sty.card}  pl-4 pr-4 `}>
      <img className={`mb-1`} alt={props.data.name} src={props.data.image}/>
      <div className={`${sty.wrap} mb-1`}>
        <p className={`${sty.itle} text text_type_digits-default mr-1`}>{props.data.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${sty.name} text text_type_main-default`}>{props.data.name}</p>
    </li>
    )
}

export default CartBurger


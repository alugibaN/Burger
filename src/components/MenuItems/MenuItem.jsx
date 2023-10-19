import React, { useState, useContext } from "react";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import sty from './MenuItem.module.css'
import PropTypes from "prop-types";
import { realContext } from "../../services/constructorContext";
import { ingredientsContext } from "../../services/ingredientsContext";


function MenuItem(props) {
  const data = useContext(realContext)
  const {addIngredient, addBulka, bulka } = useContext(ingredientsContext)
  return (
    <ul className={`${sty.menu} pl-4 pr-4`}>

      {data.map(item => {
        if (item.type === props.el) {
          return (
            <li key={item._id} className={`${sty.card}  pl-4 pr-4 `}
              onClick={() => {                
                if(item.type === 'bun'){
                  addBulka(item)
                }else if(bulka.length === 1){
                addIngredient(item)
                }
              }}>
              <img className={`mb-1`} alt={item.name} src={item.image} />
              <div className={`${sty.wrap} mb-1`}>
                <p className={`${sty.itle} text text_type_digits-default mr-1`}>{item.price}</p>
                <CurrencyIcon type="primary" />
              </div>
              <p className={`${sty.name} text text_type_main-default`}>{item.name}</p>
            </li>
          )
        }
      })}
    </ul>
  )
}

MenuItem.propTypes = {
  // data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MenuItem



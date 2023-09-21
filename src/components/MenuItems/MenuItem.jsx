import React, { useState } from "react";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import sty from './MenuItem.module.css'
import PropTypes from "prop-types";


function MenuItem(props) {
  return (
    <ul className={`${sty.menu} pl-4 pr-4`}>

      {props.data.map(item => {
        if (item.type === props.el) {
          return (
            <li key={item._id} className={`${sty.card}  pl-4 pr-4 `}
              onClick={() => {
                props.on(item)
                props.open()
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
  data: PropTypes.arrayOf().isRequired,
  openModal: PropTypes.func.isRequired
}

export default MenuItem



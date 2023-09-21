import { useState } from 'react'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import sty from './IngredientDetails.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";

function IngredientsDetails(props) {



  return (
    <div className={`${sty.container} pl-10 pt-10 pr-10`}>
      <h2 className={`ml-10 mr-10 mt-10 mb-4 text text_type_main-large ${sty.popup__title}`}>Детали Ингридиента</h2>
      <img className={`${sty.popup__img}`} src={props.data.image} alt={props.data.name} />
      <p className={`${sty.popup__name} text text_type_main-medium`}>
        {props.data.name}
      </p>
      <div className={`${sty.popup__wrap} mt-8 mb-15`}>
        <div className={`${sty.popup__colories} `}>
          <h3 className={`${sty.poup__kal} text text_type_main-small text_color_inactive`}>Калории, ккал</h3>
          <p className='mt-2 text text_type_main-default'>{props.data.calories}</p>
        </div>
        <div className={`${sty.popup__colories} `}>
          <h3 className={`${sty.poup__kal} text text_type_main-small text_color_inactive`} >Белки, г</h3>
          <p className='mt-2 text text_type_main-default'>{props.data.proteins}</p>
        </div>
        <div className={`${sty.popup__colories} `}>
          <h3 className={`${sty.poup__kal} text text_type_main-small text_color_inactive`}>Жиры, г</h3>
          <p className='mt-2 text text_type_main-default'>{props.data.fat}</p>
        </div>
        <div className={`${sty.popup__colories} `}>
          <h3 className={`${sty.poup__kal} text text_type_main-small text_color_inactive`}>Углеводы, г</h3>
          <p className='mt-2 text text_type_main-default'>{props.data.carbohydrates}</p>
        </div>
      </div>
    </div>

  )
}

IngredientsDetails.propTypes = {
  data: PropTypes.object.isRequired,
  }

export default IngredientsDetails
import { useState } from 'react'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import sty from './IngredientDetails.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

function IngredientsDetails() {

  const { ingredient } = useSelector(state => state.modal)

  return (
    <>
      <h2 className={`ml-10 mr-10 mt-10 mb-4 text text_type_main-large ${sty.popup__title}`}>Детали Ингридиента</h2>
      <img className={`${sty.popup__img}`} src={ingredient.image} alt={ingredient.name} />
      <p className={`${sty.popup__name} text text_type_main-medium`}>
        {ingredient.name}
      </p>
      <div className={`${sty.popup__wrap} mt-8 mb-15`}>
        <div className={`${sty.popup__colories} `}>
          <h3 className={`${sty.poup__kal} text text_type_main-small text_color_inactive`}>Калории, ккал</h3>
          <p className='mt-2 text text_type_main-default'>{ingredient.calories}</p>
        </div>
        <div className={`${sty.popup__colories} `}>
          <h3 className={`${sty.poup__kal} text text_type_main-small text_color_inactive`} >Белки, г</h3>
          <p className='mt-2 text text_type_main-default'>{ingredient.proteins}</p>
        </div>
        <div className={`${sty.popup__colories} `}>
          <h3 className={`${sty.poup__kal} text text_type_main-small text_color_inactive`}>Жиры, г</h3>
          <p className='mt-2 text text_type_main-default'>{ingredient.fat}</p>
        </div>
        <div className={`${sty.popup__colories} `}>
          <h3 className={`${sty.poup__kal} text text_type_main-small text_color_inactive`}>Углеводы, г</h3>
          <p className='mt-2 text text_type_main-default'>{ingredient.carbohydrates}</p>
        </div>
      </div>
    </>
    
  )
  }


IngredientsDetails.propTypes = {
  // data: PropTypes.object.isRequired,
  }

export default IngredientsDetails
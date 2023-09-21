import sty from './BurgerIngredients.module.css'
import React, { useState, useEffect, useCallback } from 'react';
import MenuItem from '../MenuItems/MenuItem'
import ingredientPropType from '../../utils/prop-types';
import PropTypes from "prop-types";



function BurgerIngredients(props) {

	const [type, setType] = useState({
		main: 'main',
		bun: 'bun',
		sauce: 'sauce',
	})



	return (
		<section className={`pt-5 ${sty.constructor} mr-5`}>
			<h2 className='mt-5 mb-5 text text_type_main-large'>
				Соберите бургер
			</h2>
			<div className={`mb-5 mt-5`}>
				<button className={`${sty.button} text text_type_main-default text_color_inactive`}>
					Булки
				</button>
				<button className={`${sty.button} text text_type_main-default text_color_inactive`}>
					Соусы
				</button>
				<button className={`${sty.button} text text_type_main-default text_color_inactive`}>
					Начинка
				</button>
			</div>
			<div className={`${sty.cards}  custom-scroll `}>
				<h3 className={` text text_type_main-medium mb-3`}>
					Булки
				</h3>
				<MenuItem data={props.data} el={type.bun} open={props.openModal} on={props.add} />
				<h3 className={` text text_type_main-medium mb-3`}>
					Соусы
				</h3>
				<MenuItem data={props.data} el={type.sauce} open={props.openModal} on={props.add} />
				<h3 className={` text text_type_main-medium mb-3`}>
					Начинка
				</h3>
				<MenuItem data={props.data} el={type.main} open={props.openModal} on={props.add} />
			</div>
		</section>
	)

}
BurgerIngredients.propTypes = {
	data: PropTypes.arrayOf(ingredientPropType).isRequired
}


export default BurgerIngredients
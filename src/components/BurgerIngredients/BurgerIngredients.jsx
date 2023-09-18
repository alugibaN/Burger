import sty from './BurgerIngredients.module.css'
import React, {useState} from 'react';
import MenuItem from '../../utils/MenuItem';


function BurgerIngredients (props){

    const [type, setType] = useState({
		main: 'main',
		bun:'bun',
		sauce: 'sauce',

	})

   return(
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
			<h3 className={`${sty.subtitle} text text_type_main-medium mb-3`}>
	 			Булки
			</h3>
				<MenuItem data={props.data} el={type.bun}  class={sty.menu} /> 
				<h3 className={`${sty.subtitle} text text_type_main-medium mb-3`}>
				Соусы
			</h3>
				<MenuItem data={props.data} el={type.sauce} class={sty.menu} /> 
				<h3 className={`${sty.subtitle} text text_type_main-medium mb-3`}>
	 			Начинка
	 		</h3>
				<MenuItem data={props.data} el={type.main} class={sty.menu} />
			</div>
		</section>
   )

    }

  

export default BurgerIngredients
import sty from './BurgerIngredients.module.css'
import React, {useState, useEffect} from 'react';
import MenuItem from '../../utils/MenuItem';


function BurgerIngredients (props){

    const [type, setType] = useState({
		main: 'main',
		bun:'bun',
		sauce: 'sauce',

	})



	const [state, setState] = useState({ 
		loading: true,
		data: [],
	  })
	
	  useEffect(() => {
		const getProductData = async () => {
			setState({...state, loading: true});
			const result = await fetch(props.url)
			const data = await result.json()
			setState({ data: data.data, loading: false })
		}
		getProductData();
	  }, [props])

	  console.log(state)

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
				<MenuItem data={state.data} el={type.bun}  class={sty.menu} /> 
				<h3 className={`${sty.subtitle} text text_type_main-medium mb-3`}>
				Соусы
			</h3>
				<MenuItem data={state.data} el={type.sauce} class={sty.menu} /> 
				<h3 className={`${sty.subtitle} text text_type_main-medium mb-3`}>
	 			Начинка
	 		</h3>
				<MenuItem data={state.data} el={type.main} class={sty.menu} />
			</div>
		</section>
   )

    }


// 	const Product = ({productId}) => {
// 		const [state, setState] = useState({ 
// 		  productData: null,
// 		  loading: true,
// 		  data:[TT:'YY']
// 		})
	  
// 		useEffect(() => {
// 		  const getProductData = async () => {
// 			setState({...state, loading: true});
// 			const res = await fetch(`${productId}`);
// 			const data = await res.json();
// 			setState({ productData: data.productData, loading: false });
// 		  }
	  
// 		  getProductData();
// 		}, [productId])
	  
// 		return state.data
// 	  } 
	   

//   console.log(Product({productId: 'https://norma.nomoreparties.space/api/ingredients'}))

export default BurgerIngredients
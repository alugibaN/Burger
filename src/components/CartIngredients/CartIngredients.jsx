import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import sty from '../BurgerConstructor/curgerConstructor.module.css'
import { , useState } from 'react'


function CartIngredients() {

    const [modalActive, setModalActive] = useState(false)
    console.log(modalActive)
        
   
    return (
        <li key={props.data._id}>
            
            <button type="button" 
                    className={sty.ingredients__info}
                    onClick={()=> setModalActive(true)}
            >
                <DragIcon type="primary" />
            </button>
            <ConstructorElement
                text={props.data.name}
                price={props.data.price}
                thumbnail={props.data.image_large}
            />
        </li>
    )
}

export default CartIngredients
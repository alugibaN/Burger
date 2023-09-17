import {data} from '../utils/data'
import React from 'react'
import MenuItem from '../utils/MenuItem'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import AppHeader from '../AppHeader/AppHeader'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import sty from'./app.module.css'

function App (){

   return (
       <div>
       <AppHeader/>
    <main className={`${sty.main}`}>
    <BurgerIngredients data={data}/>
    <BurgerConstructor/>
    </main> 
       </div> 
   )
}

export default App
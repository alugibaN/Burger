import { data } from '../../utils/data'
import React from 'react'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import AppHeader from '../AppHeader/AppHeader'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import sty from './app.module.css'

function App() {

  return (
    <div>
      <AppHeader />
      <main className={`${sty.main}`}>
        <BurgerIngredients url ={'https://norma.nomoreparties.space/api/ingredients'}/>
        <BurgerConstructor />
      </main>
    </div>
  )
}

export default App
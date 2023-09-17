import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
//  import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients'
import AppHeader from './components/AppHeader/AppHeader';
 import {data} from './components/utils/data'
 import Burger from './components/utils/CartBurger'
 import { CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import MenuItem from './components/utils/MenuItem';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients'
import App from './components/App/App'





 
const root = ReactDOM.createRoot(document.getElementById('root'));

 root.render(
		<App/>
	);






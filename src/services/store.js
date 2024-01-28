import { combineReducers } from 'redux';
import { modalReducer } from './modal/reducer';
import { ingredientReducer, registration, registrationReducer } from './API/reducer';
import { menuReducer } from './ActivMenu/reducer';
import { constructorIngredientReducer } from './AddIngredient/reducer'

export const rootReducer = combineReducers({
  card: ingredientReducer,
  modal: modalReducer,
  ingr: constructorIngredientReducer,
  menu: menuReducer,
  registration: registrationReducer
})




























// const initial = {
//   data: [],
//   dataSuccess: false,
//   dat: false,
//   dataName: []
// }

// const getCard = (state = initial, action) => {
//   switch (action.type) {
//     case GET_DATA_SUCCESS: {
//       return {
//         ...state,
//         data: [state.data, ...action.data],
//         dataSuccess: action.success,
//         dat: action.dat
//       }
//     }
//     default: {
//       return state
//     }
//   }
// }

// const initialModalState = {
//   openModalIngredient: false,
//   openModalOrder: false,
//   ingredient: null
// };

// export const OPEN_MODAL_INGREDIENT = 'OPEN_MODAL_INGREDIENT'
// export const OPEN_MODAL_ORDER = 'OPEN_MODAL_ORDER'
// export const CLOUSE_MODAL_INGREDIENT = 'CLOUSE_MODAL_INGREDIENT'
// export const CLOUSE_MODAL_ORDER = 'CLOUSE_MODAL_ORDER'

// const changeModal = (state = initialModalState, action) => {

//   switch (action.type) {
//     case OPEN_MODAL_INGREDIENT: {
//       return {
//         ...state,
//         openModalIngredient: true,
//         ingredient: action.ingredient
//       }
//     }
//     case OPEN_MODAL_ORDER: {
//       return {
//         ...state,
//         openModalOrder: true
//       }
//     }
//     case CLOUSE_MODAL_INGREDIENT: {
//       return {
//         ...state,
//         openModalIngredient: false,
//         ingredient: []
//       }
//     }
//     case CLOUSE_MODAL_ORDER: {
//       return {
//         ...state,
//         openModalOrder: false
//       }
//     }
//     default: {
//       return state
//     }
//   }
// }









// const postUrl = 'https://norma.nomoreparties.space/api/orders'

// const postHead = (el) => {
//   return {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ ingredients: el })
//   }
// }

// export const postOrder = (ingr) => {
//   return function (dispatch) {
//     fetch(postUrl, postHead(ingr))
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         dispatch({
//           type: POST_BURGER,
//           order: data
//         })
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
// }


//отвечает за добовление в store объекто и подсчет итоговой суммы
// const initialBurgerState = {
//   ingredients: [],
//   bun: [],
//   burgerIngredients: [],
//   totalSum: '0',
//   flag: false,
//   order: [],
// };

// export const ADD_INGREDIENT = 'ADD_INGREDIENT'
// export const ADD_BUN = 'ADD_BUN'
// export const SUM_PRICES = 'SUM_PRICES'
// export const BURGER_ID = 'BURGER_ID'
// export const MOVE_INGREDIENT = 'MOVE_INGREDIENT'
// export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
// export const POST_BURGER = 'POST_BURGER'




// const Ingredients = (state = initialBurgerState, action) => {
//   switch (action.type) {
//     case ADD_INGREDIENT:
//       return {
//         ...state,
//         burgerIngredients: [...state.burgerIngredients, { ...action.ingredient, uid: uuid() }],
//       };
//     case ADD_BUN:
//       return {
//         ...state,
//         bun: [action.bun],
//         flag: true
//       };
//       case REMOVE_INGREDIENT:
//         return{
//           ...state,
//           burgerIngredients:  state.burgerIngredients.filter(ingredient => ingredient.uid !== action.ingr.uid)
//     }
//     case SUM_PRICES:
//       return {
//         ...state,
//         totalSum: [...action.arr, ...state.bun].reduce((sum, item) => sum + item.price, 0)
//       };
//     case BURGER_ID:
//       const id = action.idIngr.map(el => {
//         return el._id
//       })
//       return {
//         ...state,
//         ingredients: id,
//       };
//       case MOVE_INGREDIENT:
//         return {
//           ...state,
//           burgerIngredients: [...state.burgerIngredients.splice(action.toIndex, 0, state.burgerIngredients.splice(action.fromIndex,1[0]))]
//         }
//     case POST_BURGER:
//       return {
//         ...state,
//         order: action.order,
//         bun: [],
//         burgerIngredients: []
//       };

//     default:
//       return state;
//   }
// };


// export const ACTIV_MENU = 'ACTIV_MENU'
// const initialActivMenu = {
//   activ: 'bun'
// }
// const addActivMenu = (state = initialActivMenu, action) => {
//   switch (action.type) {
//     case ACTIV_MENU: {
//       return {
//         ...state,
//         activ: action.activ
//       }
//     } default: {
//       return state
//     }
//   }
// }
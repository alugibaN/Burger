import React, { useState, useEffect, useCallback } from 'react'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import AppHeader from '../AppHeader/AppHeader'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import sty from './app.module.css'
import OrderDetails from '../modal/OrderDetails/OrderDetails'
import ModalOverlay from '../modal/ModalOverlay/ModalOverlay'
import IngredientsDetails from '../modal/IngredientDetails/IngredientDetails'
import Modal from '../modal/ModalOverlay/Modal'
import { realContext } from '../../services/constructorContext'
import { GetCardIngredient } from '../../services/ingredientsContext'




function App() {
  const [ingredient, setIngredient] = useState(null)
  const [ingredients, setIngredients] = useState([]);
  const [openIngredientsModal, setIngredientModal] = useState(false)
  const [openOrderModal, setOpenOrderModal] = useState(false)
  const [state, setState] = useState({
    hasError: false,
    loading: true,
    data: [],
  })

  const [bulk, setBulk] = useState()

  const pp = useCallback((item) => {
    setIngredient(item)

  })

  const closeModalIngredient = () => {
    setIngredientModal(false);
    setIngredient(null);
  }

  const open = useCallback(() => {
    setOpenOrderModal(true)
  }, [])

  const closeModal = () => {
    setOpenOrderModal(false);
  }

  const openIngredient = useCallback(() => {
    setIngredientModal(true)
  }, [])

  const url = 'https://norma.nomoreparties.space/api/ingredients'

  useEffect(() => {
    const getProductData = async () => {
      try {
        setState({ ...state, hasError: false, loading: true });
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error('Network response was not ok'); // Will be caught by catch block
        }
        const data = await res.json()
        setState({ data: data.data, hasError: false, loading: false })
      } catch (err) {
        console.log(err)

        setState({ ...state, hasError: true, loading: true })
      }
    }
    getProductData();
  }, [])

  return (
    
      <GetCardIngredient>
        <div>
          <AppHeader />
          <main className={`${sty.main}`}>
          <realContext.Provider value={state.data}>
            <BurgerIngredients openModal={openIngredient} add={pp}
            />
            </realContext.Provider>
            <BurgerConstructor openModal={open} />
          </main>
          {openOrderModal
            ?
            <Modal closeModal={closeModal} >
            <OrderDetails />
            </Modal>
            :
            null}
          {openIngredientsModal
            ?
            <Modal closeModal={closeModalIngredient}>
              <IngredientsDetails data={ingredient}
              />
            </Modal>
            :
            null
          }
        </div>
      </GetCardIngredient>
    
  )
}

export default App
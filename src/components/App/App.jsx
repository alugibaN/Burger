import React, { useState, useEffect, useCallback } from 'react'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import AppHeader from '../AppHeader/AppHeader'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import sty from './app.module.css'
import OrderDetails from '../modal/OrderDetails/OrderDetails'
import ModalOverlay from '../modal/ModalOverlay/ModalOverlay'
import IngredientsDetails from '../modal/IngredientDetails/IngredientDetails'
import Modal from '../modal/ModalOverlay/Modal'




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


  const pp = useCallback((item) => {
    setIngredient(item)
    //  console.log(ingredient)
  })

  const closeModalIngredient = () => {
    setIngredientModal(false);
    setIngredient(null);
  }

  const Open = useCallback(() => {
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
    <div>
      <AppHeader />
      <main className={`${sty.main}`}>
        <BurgerIngredients data={state.data}
                           openModal={openIngredient}
                           add={pp}
        />
        <BurgerConstructor data={state.data} openModal={Open} />
      </main>
      {openOrderModal
        ?
        <Modal openIngredientsModal={openOrderModal}
               closeModal={closeModal}
        >
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
  )
}

export default App
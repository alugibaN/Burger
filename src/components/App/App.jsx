import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import AppHeader from '../AppHeader/AppHeader'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import sty from './app.module.css'
import OrderDetails from '../modal/OrderDetails/OrderDetails'
// import ModalOverlay from '../modal/ModalOverlay/ModalOverlay'
import IngredientsDetails from '../modal/IngredientDetails/IngredientDetails'
import Modal from '../modal/ModalOverlay/Modal'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from 'react-redux'





function App() {

const {openModalOrder, openModalIngredient} = useSelector(state => state.modal)
  
return (
        <div>
          <AppHeader />
          <main className={`${sty.main}`}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor/>
            </DndProvider>

          </main>
          {openModalOrder
            ?
            <Modal>
            <OrderDetails />
            </Modal>
            :
            null}
          {openModalIngredient
            ?
            <Modal>
              <IngredientsDetails />
            </Modal>
            :
            null
          }
        </div>
  )
}

export default App





























import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import sty from "./app.module.css";
import OrderDetails from "../modal/OrderDetails/OrderDetails";
// import ModalOverlay from '../modal/ModalOverlay/ModalOverlay'
import IngredientsDetails from "../modal/IngredientDetails/IngredientDetails";
import Modal from "../modal/ModalOverlay/Modal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import { CLOUSE_MODAL_INGREDIENT, CLOUSE_MODAL_ORDER } from "../../services/Modal/action";

function App() {
  const { openModalOrder, openModalIngredient } = useSelector((state) => state.modal);
  const dispatch = useDispatch()

  const closeModalIngreient = ()=>{
   dispatch({
    type:  CLOUSE_MODAL_INGREDIENT
    })
  }

   const  closeModalOrder = ()=>{
    dispatch({
      type: CLOUSE_MODAL_ORDER
    })
  }
  

  return (
    <div>
      <AppHeader />
      <main className={`${sty.main}`}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
      {openModalOrder ? (
        <Modal closeModal={closeModalOrder}>
          <OrderDetails/>
        </Modal>
      ) : null}
      {openModalIngredient ? (
        <Modal closeModal= {closeModalIngreient} >
          <IngredientsDetails/>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;

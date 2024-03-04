import BurgerIngredients from "../../components/burgerIngredients/burgerIngredients";
import BurgerConstructor from "../../components/burgerConstructor/burgerConstructor";
import React from "react";
import sty from "./home.module.css";
import OrderDetails from "../../components/modal/orderDetails/orderDetails";
// import ModalOverlay from '../modal/ModalOverlay/ModalOverlay'
import IngredientsDetails from "../../components/modal/ingredientDetails/ingredientDetails";
import Modal from "../../components/modal/modalOverlay/modal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, useDispatch } from "../../utils/hooks/useDispatch";
import {
  CLOUSE_MODAL_INGREDIENT,
  CLOUSE_MODAL_ORDER,
} from "../../services/modal/action";

const HomePages:React.FC = () => {
  const { openModalOrder, openModalIngredient } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  const closeModalIngreient = () => {
    dispatch({
      type: CLOUSE_MODAL_INGREDIENT,
    });
  };

  const closeModalOrder = () => {
    dispatch({
      type: CLOUSE_MODAL_ORDER,
    });
  };

  return (
    <div>
      <main className={`${sty.main}`}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
      {openModalOrder ? (
        <Modal closeModal={closeModalOrder}>
          <OrderDetails />
        </Modal>
      ) : null}
      {openModalIngredient ? (
        <Modal closeModal={closeModalIngreient}>
          <IngredientsDetails />
        </Modal>
      ) : null}
    </div>
  );
}

export default HomePages;

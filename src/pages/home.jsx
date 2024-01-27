import BurgerIngredients from "../components/BurgerIngredients/BurgerIngredients";
import AppHeader from "../components/AppHeader/AppHeader";
import BurgerConstructor from "../components/BurgerConstructor/BurgerConstructor";
import sty from "./home.module.css";
import OrderDetails from "../components/modal/OrderDetails/OrderDetails";
// import ModalOverlay from '../modal/ModalOverlay/ModalOverlay'
import IngredientsDetails from "../components/modal/IngredientDetails/IngredientDetails";
import Modal from "../components/modal/ModalOverlay/Modal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import { CLOUSE_MODAL_INGREDIENT, CLOUSE_MODAL_ORDER } from "../services/Modal/action";
import { getCookie } from "../utils/cookie";

function HomePages() {
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
      <AppHeader/>
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

export default HomePages;








  // const getTokenExpiration = () => {
  //   // const token = document.cookie // Здесь получаем значение токена из куки
  //   //   .split("; ")
  //   //   .find((row) => row.startsWith("token="))
  //   //   .split("=")[1];
  //   const token = getCookie('token')

  //   const tokenExpiration = new Date(parseInt(token.split('.')[1]) * 1000); // Расшифровываем и получаем дату истечения срока действия

  //   console.log('hbj');
  // };
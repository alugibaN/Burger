import { useNavigate } from "react-router-dom";
import React from "react";
import IngredientsDetails from "../../components/modal/IngredientDetails/IngredientDetails";
import Modal from "../../components/modal/ModalOverlay/Modal";
import HomePages from "./home";


const ModalIngredient:React.FC = () => {
  const navigate = useNavigate();

  const closeModal = ():void => {
    navigate("/");
  };

  return (
    <>
      <HomePages />
      <Modal closeModal={closeModal}>
        <IngredientsDetails />
      </Modal>
    </>
  );
}

export default ModalIngredient;

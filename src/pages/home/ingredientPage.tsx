import React from "react";
import { useNavigate } from "react-router-dom";
import IngredientsDetails from "../../components/modal/IngredientDetails/IngredientDetails";
import Modal from "../../components/modal/ModalOverlay/Modal";

const IngredientPage:React.FC = () => {
  const navigate = useNavigate();

  const closeModal = ():void => {
    navigate("/");
  };

  return (
    <>
      <Modal closeModal={closeModal}>
        <IngredientsDetails />
      </Modal>
    </>
  );
}

export default IngredientPage;

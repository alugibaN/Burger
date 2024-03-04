import React from "react";
import { useNavigate } from "react-router-dom";
import IngredientsDetails from "../../components/modal/ingredientDetails/ingredientDetails";
import Modal from "../../components/modal/modalOverlay/modal";

const IngredientPage:React.FC = () => {
  const navigate = useNavigate();

  const closeModal = ():void => {
    navigate("/");
  };
  const background = true

  return (
    <>
      <Modal closeModal={closeModal} background={background}>
        <IngredientsDetails />
      </Modal>
    </>
  );
}

export default IngredientPage;

import { useLocation, useNavigate } from "react-router-dom";
import IngredientsDetails from "../../components/modal/IngredientDetails/IngredientDetails";
import Modal from "../../components/modal/ModalOverlay/Modal";
import HomePages from "./home";
import { useCallback } from "react";
function ModalIngredient() {
  const navigate = useNavigate();

  const closeModal = useCallback(() => {
    navigate("/");
  });

  return (
    <>
      <HomePages />
      {/* <IngredientsDetails/> */}
      <Modal closeModal={closeModal}>
        <IngredientsDetails />
      </Modal>
    </>
  );
}

export default ModalIngredient;

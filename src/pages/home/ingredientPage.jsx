import { useNavigate } from "react-router-dom";
import IngredientsDetails from "../../components/modal/IngredientDetails/IngredientDetails";
import Modal from "../../components/modal/ModalOverlay/Modal";
import { useCallback } from "react";

function IngredientPage() {
  const navigate = useNavigate();

  const closeModal = useCallback(() => {
    navigate("/");
  });

  return (
    <>
      <Modal closeModal={closeModal}>
        <IngredientsDetails />
      </Modal>
    </>
  );
}

export default IngredientPage;

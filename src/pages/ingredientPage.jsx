import { useLocation, useNavigate, useParams } from "react-router-dom";
import IngredientsDetails from "../components/modal/IngredientDetails/IngredientDetails";
import Modal from "../components/modal/ModalOverlay/Modal";
import HomePages from "./home";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import AppHeader from "../components/AppHeader/AppHeader";

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

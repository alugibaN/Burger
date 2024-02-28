import { useLocation, useNavigate, useParams,  } from "react-router-dom";
import IngredientsDetails from "../components/modal/IngredientDetails/IngredientDetails";
import Modal from "../components/modal/ModalOverlay/Modal";
import HomePages from "./home";
import { useCallback, useEffect } from "react";
import AppHeader from "../components/AppHeader/AppHeader";

function ModalIngredient() {
  const navigate = useNavigate();

  const location = useLocation();
 
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



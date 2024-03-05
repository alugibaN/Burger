import React, { useCallback } from "react";
import Modal from "../../components/modal/modalOverlay/modal";
import FeedNumberModal from "../../components/modal/feedNumberModal/feedNumberModal";
import FeedPage from "./feed";
import { useNavigate } from "react-router-dom";

const FeedModal:React.FC = () => {
  const navigate = useNavigate();

  const closeModal = ():void => {
    navigate("/feed");
  };
  return (
    <>
      <FeedPage />
      <Modal closeModal={closeModal} >
        <FeedNumberModal />
      </Modal>
    </>
  );
};

export default FeedModal;

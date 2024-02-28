import React, { useCallback } from "react";
// import sty from './feedNumber.module.css'
import Modal from "../../components/modal/ModalOverlay/Modal";
import FeedNumberModal from "../../components/modal/feedNumberModal/feedNumberModal";
import FeedPage from "./feed";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const FeedModal = () => {
  const navigate = useNavigate();

  const closeModal = useCallback(() => {
    navigate("/feed");
  });

  return (
    <>
      <FeedPage />
      <Modal closeModal={closeModal}>
        <FeedNumberModal />
      </Modal>
    </>
  );
};

export default FeedModal;

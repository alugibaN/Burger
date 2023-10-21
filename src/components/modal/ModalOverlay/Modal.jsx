import React, { useEffect, forwardRef, useContext } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import sty from "./ModalOverlay.module.css";
import PropTypes from "prop-types";
import { ingredientsContext } from "../../../services/ingredientsContext";

const domModal = document.getElementById("modal");

const Modal = forwardRef(({ children, closeModal }, ref) => {
  const {flag} = useContext(ingredientsContext)
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeModal();
        
      }
    }
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, [closeModal])

  return ReactDOM.createPortal(
<div ref={ref}>
    <ModalOverlay closeModal={closeModal}>
    
    <div className={`${sty.container}`} onClick={e => e.stopPropagation()} >
    <button type="button" className={sty.popup__close} onClick={closeModal}><CloseIcon
        type="primary" /></button>
      {children}
      </div>
    </ModalOverlay>
    </div>, domModal
  );
});

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired
};
export default Modal;
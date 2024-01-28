import React, { useEffect, forwardRef, useState } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import sty from "./ModalOverlay.module.css";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const domModal = document.getElementById("modal");

const Modal = forwardRef(({children, closeModal}, ref) => {
const location =useLocation()
const [style, setStyle] = useState(false)
const { openModalOrder } = useSelector((state) => state.modal);

  useEffect(() => {
    if(location.state ){
      setStyle(true)
    }
  })

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeModal()
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
    
    <div className={style || openModalOrder ? `${sty.container}` : `${sty.wrapp}`} onClick={e => e.stopPropagation()} >
      {style || openModalOrder ? 
    <button type="button" className={sty.popup__close} onClick={closeModal}><CloseIcon
        type="primary" /></button>
      : null}
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
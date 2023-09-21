import sty from './ModalOverlay.module.css'
import {useState} from 'react'
import PropTypes from "prop-types";


function ModalOverlay ({children, closeModal}){

  return (
  <div className={sty.popup} onClick={closeModal}>
    {children}
  </div>

  )
}
ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
  // children: PropTypes.element.isRequired,
 children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ModalOverlay
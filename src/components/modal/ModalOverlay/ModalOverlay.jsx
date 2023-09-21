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
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,

};
export default ModalOverlay
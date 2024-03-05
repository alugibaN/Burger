import sty from './modalOverlay.module.css'
import React from 'react';

interface IMovieProps {
  children:React.ReactNode,
  closeModal: ()=> void,
}

const ModalOverlay:React.FC<IMovieProps> = ({children, closeModal}) =>{

  return (
  <div className={sty.popup} onClick={closeModal}>
    {children}
  </div>

  )
}

export default ModalOverlay
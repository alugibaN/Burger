import React, { useEffect, forwardRef, useState } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import sty from "./ModalOverlay.module.css";
import { useLocation } from "react-router-dom";
import { useSelector } from '../../../utils/hooks';

interface IMovieProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const domModal: HTMLElement | null = document.getElementById("modal");
const Modal: React.ForwardRefRenderFunction<HTMLDivElement, IMovieProps> = (
  { children, closeModal },
  ref
) => {
  const __cpLocation = useLocation();
  const [style, setStyle] = useState(false);
  const { openModalOrder } = useSelector((state) => state.modal);

  useEffect((): void => {
    if (__cpLocation.state) {
      setStyle(true);
    }
  });

  useEffect(() => {
    const handleEscClose = (e:KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [closeModal]);
  
  if(domModal) {
    return ReactDOM.createPortal(
      <div ref={ref}>
        <ModalOverlay closeModal={closeModal}>
          <div
            className={style || openModalOrder ? `${sty.container}` : `${sty.wrapp}`}
            onClick={(e) => e.stopPropagation()}
          >
            {style || openModalOrder ? (
              <button type="button" className={sty.popup__close} onClick={closeModal}>
                <CloseIcon type="primary" />
              </button>
            ) : null}
            {children}
          </div>
        </ModalOverlay>
      </div>,
      domModal
    );
  }

  return null;
};

export default forwardRef(Modal);
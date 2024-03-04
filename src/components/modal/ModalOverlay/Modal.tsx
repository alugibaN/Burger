import React, { useEffect, forwardRef, useState } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./modalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import sty from "./modalOverlay.module.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "../../../utils/hooks/useDispatch";

interface IMovieProps {
  children: React.ReactNode;
  closeModal: () => void;
  background?:boolean;
}

const domModal: HTMLElement | null = document.getElementById("modal");
const Modal: React.ForwardRefRenderFunction<HTMLDivElement, IMovieProps> = (
  { children, closeModal, background },
  ref
) => {
  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [closeModal]);
  if (domModal) {
    return ReactDOM.createPortal(
      <div ref={ref}>
        <ModalOverlay closeModal={closeModal}>
          <div
            className={!background ? `${sty.container}` : `${sty.wrapp}`}
            onClick={(e) => e.stopPropagation()}
          >
            {background ? (
              <button
                type="button"
                className={sty.popup__close}
                onClick={closeModal}
              >
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

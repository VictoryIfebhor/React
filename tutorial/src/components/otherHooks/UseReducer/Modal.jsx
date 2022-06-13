import React, { useEffect } from "react";

const Modal = ({ state, closeModal }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      closeModal();
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [state]);

  return (
    <>
      <div className="modal">
        <p>{state.modalContent}</p>
      </div>
    </>
  );
};

export default Modal;

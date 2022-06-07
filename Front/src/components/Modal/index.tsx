import React from "react";
import "./styles.scss";

type ModalProps = {
  setOpenModal: React.Dispatch<boolean>;
};

function Modal({ setOpenModal }: ModalProps) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Nos informe seu problema</h1>
        </div>
        <div className="body">
          <textarea
          placeholder="Digite aqui"></textarea>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

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
          <div>
            Olá <span>Tiago</span>, Bem vindo !!
            {/*{username}*/}
          </div>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="body">
          <textarea placeholder="Insira aqui seu problema"></textarea>
        </div>

        <div className="select">
          <span>Escolha um</span>
          <select name="select">
            <option selected>Setor</option>
            <option value="sport">Esportivo</option>
            <option value="library">Biblioteca</option>
            <option value="Refectory">Refeitório</option>
            <option value="laboratory">Laboratório</option>
            <option value="warehouse">Almoxarifado</option>
          </select>
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

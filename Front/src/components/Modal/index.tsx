import React, { useState } from "react";
import { instanceApi } from "../../services/api";
import "./styles.scss";

type ModalProps = {
  setOpenModal: React.Dispatch<boolean>;
};

function Modal({ setOpenModal }: ModalProps) {
  const [problem, setProblem] = useState("");
  const [sector, setSector] = useState("");

  const sendProblem = async () => {
    const response = await instanceApi.post("problems/create", {
      description: problem,
      email: "jackbeta@gmail.com",
      department: sector,
    });

    if (response.status === 201) {
      alert("Problema enviado com sucesso!");
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <div>
            Olá <span>Tiago</span>, nos informe seu problema
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
          <textarea
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Insira aqui seu problema"
          ></textarea>
        </div>

        <div className="select">
          <span>Escolha um</span>
          <select onChange={(e) => setSector(e.target.value)} name="select">
            <option selected>Setor</option>
            <option value="sport">Esportivo</option>
            <option value="library">Biblioteca</option>
            <option value="refectory">Refeitório</option>
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
            Cancelar
          </button>
          <button id="sendBtn" onClick={sendProblem}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

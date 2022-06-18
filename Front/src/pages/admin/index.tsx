import React, { useState } from "react";
import Problems from "../../components/Problems";

import checkImg from "../../assets/img/check.svg";
import answerImg from "../../assets/img/answer.svg";
import deleteImg from "../../assets/img/delete.svg";

import "./styles.scss";
import ModalSolution from "../../components/ModalSolution";

export default function Admin() {
  const [modalSolutionOpen, setModalSolutionOpen] = useState(false);

  return (
    <>
      <div id="page-profile">
        <div className="container">
          <aside className="card">
            <img src="https://github.com/JacksonMarcony.png" alt="" />
            <h2>Jackson Marcony</h2>
            <p>
              Administrador do setor <br />
              <strong>Esportivo</strong>
            </p>
            <button form="form-profile" type="submit">
              Enviar Solução
            </button>
          </aside>
        </div>

        <main>
          <Problems>
            <button type="button">
              <img src={checkImg} alt="Marcar pergunta como respondida" />
            </button>

            <button
              type="button"
              onClick={() => {
                setModalSolutionOpen(true);
              }}
            >
              <img src={answerImg} alt="Dar destaque à pergunta" />
            </button>

            <button type="button">
              <img src={deleteImg} alt="Remover Pergunta" />
            </button>
          </Problems>
          {modalSolutionOpen && (
            <ModalSolution setOpenModalSolution={setModalSolutionOpen} />
          )}
        </main>
      </div>
    </>
  );
}

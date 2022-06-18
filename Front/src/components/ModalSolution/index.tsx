import React from "react";

import "./styles.scss";

type ModalSolutionProps = {
  setOpenModalSolution: React.Dispatch<boolean>;
};

export default function ModalSolution({
  setOpenModalSolution,
}: ModalSolutionProps) {
  return (
    <div id="solution">
      <form>
        <div className="modalContainer">
          <button type="button" onClick={() => {
                setOpenModalSolution(false);
            }}>
            X
          </button>
          <textarea placeholder="Insira uma solução"></textarea>
          <div className="footer">
            <button id="cancel" type="button" onClick={() => {
                setOpenModalSolution(false);
            }}>
            Cancelar
          </button>
          <button id="send" type="button">
            Enviar Solução
          </button>
          </div>
        </div>
      </form>
    </div>
  );
}

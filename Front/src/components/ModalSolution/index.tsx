import React, { useState } from "react";

import "./styles.scss";

type ModalSolutionProps = {
  setOpenModalSolution: React.Dispatch<boolean>;
  handleToSendSolution: (solution: string) => Promise<void>;
};

export default function ModalSolution({
  setOpenModalSolution, handleToSendSolution
}: ModalSolutionProps) {
  const [solution, setSolution] = useState("");

  return (
    <div id="solution">
      <form>
        <div className="modalContainer">
          <button
            type="button"
            onClick={() => {
              setOpenModalSolution(false);
            }}
          >
            X
          </button>
          <textarea
            onChange={(e) => setSolution(e.target.value)}
            placeholder="Insira uma solução"
          ></textarea>
          <div className="footer">
            <button
              id="cancel"
              type="button"
              onClick={() => {
                setOpenModalSolution(false);
              }}
            >
              Cancelar
            </button>
            <button
              onClick={async () => await handleToSendSolution(solution)}
              id="send"
              type="button"
            >
              Enviar Solução
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

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
        <textarea placeholder="insira uma solução"></textarea>
      </form>
    </div>
  );
}

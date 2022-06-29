import React from "react";

import Panel from "../../Panel";

import { Container, HashtagIcon } from "./styles";

const tags = [
  "faltadeLivro",
  "materialnoalmoxarifado",
  "quadrapoliesportiva",
  "horariodeatendimento",
  "emprestimodeobjetos",
];

const HashtagPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Problemas Recorrentes</span>

        {tags.map((item) => (
          <span className="tag">
            <HashtagIcon />
            {item}
          </span>
        ))}
      </Panel>
    </Container>
  );
};

export default HashtagPanel;

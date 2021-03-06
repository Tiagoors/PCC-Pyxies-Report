import React from "react";

import Panel from "../../Panel";

import { Container } from "./styles";

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Possíveis setores</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Refeitório</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Biblioteca</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Esportivo</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Laboratório</span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">Almoxarifado</span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;

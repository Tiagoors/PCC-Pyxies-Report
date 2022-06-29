import React from "react";

import Panel from "../../Panel";

import { Container } from "./styles";

const TrendingPanel: React.FC = () => {
  return (
    <Container>
      <Panel>
        <span className="title">Avisos</span>

        <ul>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">
                Por favor reportar apenas problemas ligados a instituição
              </span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">
                É necessário que o reporte de problemas seja de forma mais
                educada possível
              </span>
            </span>
          </li>
          <li>
            <span className="bullet" />
            <span className="news">
              <span className="head">
                Em caso de dúvidas entre em contato conosco{" "}
                <a href="mailto:pyxiesreport@gmail.com">pyxiesreport@gmail.com</a>
              </span>
            </span>
          </li>
        </ul>
      </Panel>
    </Container>
  );
};

export default TrendingPanel;

import React from "react";

import Panel from "../../Panel";

import { Container } from "./styles";

const ProfilePanel: React.FC = () => {
  const img = "https://github.com/Tiagoors.png";
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img src={img} alt="Avatar" className="profile-picture" />
        <h1>Tiago Rodrigues</h1>
        <h2>Aluno do IF Baiano</h2>

        <div className="separator"></div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;

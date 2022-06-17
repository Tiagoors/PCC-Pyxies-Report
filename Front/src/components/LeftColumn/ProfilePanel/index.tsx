import React from "react";

import Panel from "../../Panel";

import { Container } from "./styles";

const ProfilePanel: React.FC = () => {
  const img = "https://github.com/JacksonMarcony.png";
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img src={img} alt="Avatar" className="profile-picture" />
        <h1>Tiago Rodrigues da Silva</h1>
        <h2>Student | Desenvolvedor Web</h2>

        <div className="separator"></div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;

import React from "react";

import Panel from "../../Panel";

import { Container, CameraIcon } from "./styles";

const FeedShare: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="attachment">
          <button>
            <CameraIcon />
            Foto
          </button>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;

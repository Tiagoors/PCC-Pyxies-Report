import React from "react";

import Panel from "../../Panel";

import { Container, CameraIcon, VideoCameraIcon } from "./styles";

const FeedShare: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="attachment">
          <button>
            <CameraIcon />
            Foto
          </button>
          <button>
            <VideoCameraIcon />
            Video
          </button>
        </div>
      </Container>
    </Panel>
  );
};

export default FeedShare;

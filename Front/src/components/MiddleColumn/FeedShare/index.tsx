import React, { useState } from "react";

import Panel from "../../Panel";

import { Container, WriteIcon, CameraIcon, VideoCameraIcon } from "./styles";

import Modal from "../../Modal";

const FeedShare: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Panel>
      <Container>
        <button
          className="btn-problem"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <div className="write">
            <WriteIcon />
            <span>Comece uma publicação - Informe um problema</span>
          </div>
        </button>
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
        {modalOpen && <Modal setOpenModal={setModalOpen} />}

      </Container>
    </Panel>
  );
};

export default FeedShare;

import React, { useState, useEffect } from "react";

import MobileHeader from "../MobileHeader";
import DesktopHeader from "../DesktopHeader";
import AdBanner from "../AdBanner";
import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";

import Modal from "../Modal";

import { WriteIcon } from "../MiddleColumn/FeedShare/styles";

import { Container } from "./styles";

const Layout: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <MobileHeader />
      <DesktopHeader />

      <span>{!isLoading && <AdBanner />}</span>
      <div className="btn">
        <button
          className="btn-problem"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <div className="write">
            <WriteIcon />
            <span>Informe um problema</span>
          </div>
        </button>
      </div>
      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  );
};

export default Layout;

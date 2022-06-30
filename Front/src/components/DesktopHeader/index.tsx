import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Wrapper,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>

            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>

            <Link to="/profile">
              <button>
                <ProfileCircle src="https://github.com/Tiagoors.png" />
                <span>Eu</span>
              </button>
            </Link>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Header;

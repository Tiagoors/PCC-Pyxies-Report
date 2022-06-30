import React from "react";

import Panel from "../../Panel";

import Logo from "../../../assets/logo.svg";
import PostImg from "../../../assets/profile.jpg";

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
} from "./styles";

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src={Logo} alt="Pyxies Midia" />
          <Column>
            <h3>Pyxies Midia</h3>
            <h4>Instituição de ensino</h4>
            <time>1 hr</time>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Column>
        </Row>

        <PostImage src={PostImg} alt="Post Image" />

        <Row className="likes">
          <span className="circle blue" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;

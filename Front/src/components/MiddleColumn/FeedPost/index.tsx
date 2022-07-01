import React from "react";

import Panel from "../../Panel";

import Logo from "../../../assets/logo.svg";
import PostImg from "../../../assets/profile.jpg";

import { imagePath } from "../../../environment/environment.json";

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
} from "./styles";

type FeedPostProps = {
  description: string;
  author: string;
  department: string;
  image: string;
};

const FeedPost: React.FC<FeedPostProps> = ({
  author,
  description,
  department,
  image
}) => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src={"https://www.pngmart.com/files/21/Account-User-PNG-Transparent.png"} alt="Pyxies Midia" />
          <Column>
            <h3>{author}</h3>
            <h3>{department}</h3>
            <br />
            <p>
              {description}
            </p>
          </Column>
        </Row>

        <PostImage src={imagePath + image} alt="Post Image" />

        {/* <Row className="likes">
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
        </Row> */}
      </Container>
    </Panel>
  );
};

export default FeedPost;

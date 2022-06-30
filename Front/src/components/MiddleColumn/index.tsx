import React from "react";

import LoadingFeedShare from "../Shimmer/LoadingFeedShare";
import LoadingFeedPost from "../Shimmer/LoadingFeedPost";
import FeedShare from "./FeedShare";
import FeedPost from "./FeedPost";

import { Container } from "./styles";
import { IProblemPost } from "../../interfaces/problemPost";


type MiddleColumnProps = {
  isLoading: boolean;
  posts: IProblemPost[];
}

const MiddleColumn: React.FC<MiddleColumnProps> = ({ isLoading, posts }) => {
  

  return (
    <Container className="middle-column">
      {isLoading ? (
        <>
          {/* <LoadingFeedShare /> */}
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          {/* <FeedShare /> */}
          
          {posts.map(post => {
            return (
              <FeedPost />
            )
          })}
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;

import React from "react";
import "./PostContainer.css";

import Posts from "./Posts";

const PostContainer = props => {
  return (
    <div>
      <Posts posts={props.post} />
    </div>
  );
};

export default PostContainer;

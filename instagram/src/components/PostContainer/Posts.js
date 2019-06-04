import React from "react";
import "./PostContainer.css";

import Post from "./Post";
import CommentSectionContainer from "../CommentSection/CommentSectionContainer";
import CommentInput from "../CommentSection/CommentsInput";

const Posts = props => {
  return (
    <div>
      {props.posts.map(post => {
        return (
          <div>
            <div>
              <Post post={post} key={props.id} />
            </div>
            <div className="comment-section">
              <CommentSectionContainer comments={post.comments} />
            </div>
            <div className="comment-input-section">
              <CommentInput />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

import React from "react";
import "./CommentSection.css";

import Comments from "./Comments";
import commentsInput from "./CommentsInput";

const CommentSectionContainer = props => {
  return (
    <div>
      {props.comments.map(comment => {
        return (
          <div>
            <div className="post-comments">
              <Comments comments={comment} />
            </div>

            <div className="post-input">
              <commentsInput />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSectionContainer;

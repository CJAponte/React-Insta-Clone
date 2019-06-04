import React from "react";
import "./CommentSection.css";

import Comments from "./Comments";

const CommentSectionContainer = props => {
  return (
    <div>
      {props.comments.map(comment => {
        return (
          <div key={comment.id}>
            <div className="post-comments">
              <Comments comments={comment} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSectionContainer;

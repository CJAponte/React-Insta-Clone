import React from "react";
import "./CommentSection.css";

const CommentsInput = props => {
  return (
    <div className="comment-input">
      <input type="text" placeholder="Add Comment..." />
    </div>
  );
};

export default CommentsInput;

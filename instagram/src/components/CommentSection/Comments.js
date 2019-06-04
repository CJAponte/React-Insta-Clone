import React from "react";
import "./CommentSection.css";

const Comments = props => {
  return (
    <div className="comments-section">
      <strong>{props.comments.username}</strong>
      <p>{props.comments.text}</p>
    </div>
  );
};

export default Comments;

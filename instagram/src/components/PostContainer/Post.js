import React from "react";
import "./PostContainer.css";

const Post = props => {
  return (
    <div className="posts-containers">
      <div className="post-header">
        <img
          className="profile-picture"
          src={props.post.thumbnailUrl}
          alt="profilePicture"
        />
        <p className="username">{props.post.username}</p>
      </div>
      <div clasName="post-image">
        <img className="post-picture" src={props.post.imageUrl} />
      </div>
    </div>
  );
};

export default Post;

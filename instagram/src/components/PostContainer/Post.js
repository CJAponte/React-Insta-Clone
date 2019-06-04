import React from "react";
import "./PostContainer.css";
import PropTypes from "prop-types";

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
      <div className="post-image">
        <img className="post-picture" src={props.post.imageUrl} />
      </div>

      <div className="interaction-btns">
        <div className="like-btn" />
        <div className="comment-btn" />
        <div className="share-btn" />
      </div>
      <div className="like-counter">
        <p className="likes">{props.post.likes} likes</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    text: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;

import React from "react";
import Comment from "./Comment";
import "./CommentSection.css";
import styled from "styled-components";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.obj.comments,
      counter: this.props.obj.likes,
      input: "",
      liked: false
    };
  }

  handleInput = event => {
    const { value } = event.target;
    this.setState({
      input: value
    });
  };

  commentIcon = event => {
    event.preventDefault();
    document.getElementById("comment-input").focus();
  };

  addNewComment = event => {
    event.preventDefault();
    const newComment = {
      username: "Ted Bundy",
      text: this.state.input
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      input: ""
    });
  };

  addNewLike = event => {
    event.preventDefault();
    const hearts = this.state.counter;
    const liked = this.state.liked;
    if (liked === false) {
      this.setState({
        counter: hearts + 1,
        liked: true
      });
    } else if (liked === true) {
      this.setState({
        counter: hearts - 1,
        liked: false
      });
    }
  };

  render() {
    return (
      <CommentSectionStyling>
        <CommentIcons>
          <a href="#" onClick={this.addNewLike}>
            <div className="like-Heart" />
          </a>
          <a href="#" onClick={this.commentIcon}>
            <div className="comment-Bubble" />
          </a>
        </CommentIcons>

        {this.state.counter === 1 ? (
          <Likes className="like">1 like</Likes>
        ) : (
          <Likes>{this.state.counter} likes</Likes>
        )}

        <CommentsContainer>
          {this.state.comments.map(item => {
            return (
              <Comment
                key={item.text}
                username={item.username}
                text={item.text}
              />
            );
          })}
        </CommentsContainer>

        <Timestamp>{this.props.obj.timestamp}</Timestamp>

        <AddComment onSubmit={this.addNewComment}>
          <Input
            onChange={this.handleInput}
            id="comment-input"
            placeholder="Add a comment..."
          />
        </AddComment>
      </CommentSectionStyling>
    );
  }
}

const CommentSectionStyling = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  width: 100%;
`;

const Likes = styled.p`
  font-size: 12=4px;
  align-self: flex-start;
  padding-left: 20px;
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Timestamp = styled.p`
  font-size: 12px;
  align-self: flex-start;
  margin-left: 3%;
  color: gray;
`;

const Input = styled.input`
  height: 60px;
  width: 85%;
  font-size: 14px;
  border: none;
  padding-left: 25px;
  position: relative;
  top: 5px;
  &:focus {
    outline-color: transparent;
    outline-style: none;
  }
`;
const AddComment = styled.form`
  display: flex;
  width: 100%;
  height: 56px;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  margin-bottom: 10px;
  border-top: 1px solid #e6e6e6;
`;

export default CommentSection;

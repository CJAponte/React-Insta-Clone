import React from "react";
import "./CommentSection.css";

class CommentsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.comment,
      input: ""
    };
  }

  eventHandle = event => {
    const { value } = event.target;
    this.setState({
      input: value
    });
  };

  addNewComment = event => {
    event.preventDefault();
    const newComment = {
      username: "Ted Bundy",
      text: this.state.input
    };
    this.setState({
      comments: [...this.state.comment, newComment],
      input: ""
    });
  };

  render() {
    return (
      <form className="comment-input" onSubmit={this.addNewComment}>
        <input
          onChange={this.eventHandle}
          type="text"
          placeholder="Add Comment..."
          name="text"
        />
      </form>
    );
  }
}
export default CommentsInput;

import React from "react";
import "./App.css";

import { dummyData } from "./dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
// import CommentSectionContainer from "./components/CommentSection/CommentSectionContainer";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      post: [],
      input: ""
    };
  }

  componentDidMount() {
    this.setState({ post: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer
          post={this.state.post}
          comments={this.state.post.comments}
        />
      </div>
    );
  }
}

export default App;

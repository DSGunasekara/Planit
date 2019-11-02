import React, { Component } from "react";
import PostItems from "./PostItem";

export class Post extends Component {
  render() {
    return this.props.users.map(user => (
      <PostItems key={user.id} user={user} />
    ));
  }
}

export default Post;

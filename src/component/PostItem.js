import React, { Component } from "react";

export class PostItem extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div className="post-item">
        <h1>{this.props.user.name}</h1>
        <h2>{this.props.user.job}</h2>
      </div>
    );
  }
}

export default PostItem;

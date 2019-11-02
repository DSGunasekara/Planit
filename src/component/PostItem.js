import React, { Component } from "react";

export class PostItem extends Component {
  render() {
    console.log(this.props.users);
    return <h1>{this.props.user.name}</h1>;
  }
}

export default PostItem;

import React, { Component } from "react";
import Post from "./component/Post";

import "./App.css";

export class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Dilain",
        job: "web"
      },
      {
        id: 2,
        name: "Gunasekara",
        job: "software"
      }
    ]
  };
  render() {
    return <Post users={this.state.users} />;
  }
}

export default App;

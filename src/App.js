import React, { Component } from "react";

import Home from "./Components/Home";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

import React, { Component } from "react";

export default class SonA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: "green" }}>
        呢個係 A
        <div>
          <hr />
          NAME : {this.state.name}
          <hr />
          <input
            input="text"
            defaultValue=""
            name="title"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <hr />
          <button onClick={() => this.props.addName(this.state.name)}>
            click me add one
          </button>
          <button onClick={() => this.props.changeShow()}>
            click me 令到SON B SHOW OBJ
          </button>
        </div>
      </div>
    );
  }
}

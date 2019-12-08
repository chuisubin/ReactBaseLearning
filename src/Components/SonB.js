import React, { Component } from "react";
import SonObj from "./SonObj";
export default class SonB extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ backgroundColor: "pink" }}>
        呢個係 B
        <hr />
        {this.props.show == true ? (
          <div>
            顯示OBJ:
            <SonObj Obj={this.props.Obj} />
          </div>
        ) : (
          "唔好顯示"
        )}
      </div>
    );
  }
}

import React, { Component } from "react";

export default class SonObj extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        this.is SonObj
        {this.props.Obj.map((item, index) => {
          return (
            <div key={index}>
              <p>name:{item.name}</p>
              <p>id:{item.id}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

import SonA from "./SonA";
import SonB from "./SonB";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      Obj: [
        {
          id: 1,
          name: "subin"
        },
        {
          id: 2,
          name: "mum"
        }
      ]
    };
  }
  changeState = name => {
    //change state
    let newId = Object.keys(this.state.Obj).length + 1; //
    let newObj = { id: newId, name: name };

    let arr = this.state.Obj;
    arr.push(newObj);

    this.setState({
      Obj: arr
      // show: true
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "blue", padding: "5%" }}>
        <h2>this is Home</h2>
        OBJ: {JSON.stringify(this.state.Obj)}
        <br />
        <hr />
        <SonA
          addName={this.changeState}
          changeShow={() => this.setState({ show: !this.state.show })}
        />
        <hr />
        <SonB Obj={this.state.Obj} show={this.state.show} />
      </div>
    );
  }
}

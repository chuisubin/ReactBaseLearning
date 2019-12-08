import React, { Component } from "react";
import axios from "axios";
export default class inputHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id:"",
      name: "",
      special: ""
    };
    this.changeVal = this.changeVal.bind(this);
  }
  changeVal = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submitPost = event => {
    // event.preventDefault();

    axios
      .post("http://localhost:3003/heroes", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    // this.props.updateList(this.state);
  };

  render() {
    const { name, special } = this.state;
    return (
      <div>
        <form onSubmit={this.submitPost}>
          <div>
            &nbsp;&nbsp; 輸入英雄名 :&nbsp;
            <input
              type="text"
              name="name"
              onChange={this.changeVal}
              value={name}
            />
          </div>
          <div>
            &nbsp;&nbsp; 輸入英雄能力 :&nbsp;
            <input
              type="text"
              name="special"
              onChange={this.changeVal}
              value={special}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

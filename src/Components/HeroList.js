import React, { Component } from "react";

export default class HeroList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: props.heroes
    };
  }
  componentWillMount() {
    console.log(this.state.heroes);
  }

  render() {
    return (
      <div>
        <table>
          {this.state.heroes.map((hero, id) => {
            return (
              <tr key={id}>
                <td>&nbsp;英雄:</td>
                <td>{hero.name}</td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>能力: :</td>
                <td>{hero.special}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

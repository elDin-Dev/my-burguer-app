import React, { Component } from "react";
import Aux from "../../hoc/Auxiliar";
import Burguer from "../../components/Burger/Burguer";

class BurguerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burguer />
        <div>Build Contols</div>
      </Aux>
    );
  }
}

export default BurguerBuilder;
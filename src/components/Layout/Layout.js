import React from "react";
import Aux from "../../hoc/Auxiliar";

const layout = props => (
  <Aux>
    <div>ToolBar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
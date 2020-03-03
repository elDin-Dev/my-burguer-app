import React from "react";
import Aux from "../../hoc/Auxiliar";
import classes from "./Layout.module.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
  <Aux>
    <Toolbar />
    <div> SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
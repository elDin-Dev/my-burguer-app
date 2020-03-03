import React from "react";
import Aux from "../../hoc/Auxiliar";
import classes from "./Layout.module.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <div> Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
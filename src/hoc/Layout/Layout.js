import React, { Component } from "react";
import Aux from "../Auxiliar/Auxiliar";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from 'react-redux';

class Layout extends Component {

  state = {
    showSideDrawer: false,
  }

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });

  }

  sideDrawerToggleHandler = () => {
    this.setState(
      (prevState) => {
        return { showSideDrawer: !prevState.showSideDrawer };
      }
    );
  }

  render() {
    return (
      <Aux>
        <Toolbar 
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler} />
        <div> Backdrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {

  return {
    isAuthenticated: state.auth.token !== null
  };

}


export default connect(mapStateToProps, null)(Layout);

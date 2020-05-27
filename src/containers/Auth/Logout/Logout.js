import React, { Component } from 'react';
import * as actions from '../../../store/actions/';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Logout extends Component {

    componentDidMount() {
        this.props.onLogout();
    }


    render() {
        return (
            <Redirect to="/" />
        );
    }

}

const mapDispathToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
}

export default connect(null, mapDispathToProps)(Logout);

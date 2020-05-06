import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData'
import {connect} from 'react-redux';

export class Checkout extends Component {

    checkoutCancelledHandler = () => {

        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {

        this.props.history.replace('/checkout/contact-data');

    }


    onCheckoutCancelled
    render() {
        return (
            <div>
                <CheckoutSummary
                    onCheckoutContinued={this.checkoutContinuedHandler}
                    onCheckoutCancelled={this.checkoutCancelledHandler}
                    ingredients={this.props.ings} />

                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
    };
}


export default connect(mapStateToProps)(Checkout)
import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux';


export class Checkout extends Component {


    checkoutCancelledHandler = () => {

        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {

        this.props.history.replace('/checkout/contact-data');

    }


    onCheckoutCancelled
    render() {

        console.log('[Checkou - >render]', this.props.purchased);

        let summary = <Redirect to="/" />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null ;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        onCheckoutContinued={this.checkoutContinuedHandler}
                        onCheckoutCancelled={this.checkoutCancelledHandler}
                        ingredients={this.props.ings} />

                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            );

        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        purchased: state.order.purchased,
    };
}


export default connect(mapStateToProps)(Checkout)

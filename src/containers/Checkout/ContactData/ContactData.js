import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css'
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

export class ContactData extends Component {

    state = {

        loading: false,

        name: '',
        email: '',
        addres: {
            street: '',
            postalCode: '',
        },
    }


    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loadin: true, });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'alex',
                address: {
                    stree: 'Rue Percebe,13',
                    zipCode: '80803',
                    country: 'Spain',
                },
                email: 'va@venga.ves'
            },
            deliveryMethod: 'fastest',
        }

        axios.post('/orders.json/', order)
            .then(response => {
                console.log(response)
                this.setState({ loading: false });
                this.props.history.push('/');

            })
            .catch(error => {
                console.log(error)
                this.setState({ loading: false });
            });



    }

    render() {
        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your name" />
                <Input inputtype="input" type="text" name="email" placeholder="Your email" />
                <Input inputtype="input" type="text" name="street" placeholder="Your street" />
                <Input inputtype="input" type="text" name="postal" placeholder="Your postal" />
                <Button buttonType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;

        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>


        )
    }
}

export default ContactData

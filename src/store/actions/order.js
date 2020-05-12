import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const purchaseBurgerSucess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData,
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        orderId: error,
    }
}
export const purchaseBurgerStart= () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START

    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json/', orderData)
            .then(response => {
                console.log('[purchaseBurger]',response.data);
                dispatch(purchaseBurgerSucess(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });        
    }
}
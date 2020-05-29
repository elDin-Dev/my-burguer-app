import * as actionTypes from "../actions/actionTypes";
import { updateObject } from '../../shared/utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
}
const purchaseburgerStart = (state, action) => {
  return updateObject(state, { loading: true });
}
const purchaseburgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.ordirId });

  return updateObject(state, {
    ...state,
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  });

}

const purchaseburgerFail = (state, action) => {
  return updateObject(state, { loading: false });
}
const fetchOrdersStart = (state, action) => {
  return updateObject(state, { loading: true });
}

const fetchOrdersSucess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false,
  });

}

const fetchOrdersFail = (state, action) => {
  return updateObject(state, { loading: false });
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START: return purchaseburgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseburgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL: return purchaseburgerFail(state, action);
    case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSucess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
    default: return state;
  }
};

export default reducer;

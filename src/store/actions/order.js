import * as actionTypes from './actionTypes';
import PostData from '../../fetch-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};
export const purchaseBurgerStart = (orderData) => {
  return (dispatch) => {
    PostData(
      'https://react-my-burger-c7cdf.firebaseio.com/orders.json',
      orderData
    ).then((data) => {
      dispatch(purchaseBurgerSuccess(data, orderData));
    });
  };
};

export const purchaseBurger = (orderData) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    PostData.post('/orders.json', orderData)
      .then((response) => {
        console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.name, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    fetch('https://react-my-burger-c7cdf.firebaseio.com/orders.json')
      .then((response) => response.json())
      .then((data) => {
        const fetchedOrders = [];
        for (let prop in data) {
          fetchedOrders.push({ ...data[prop], id: prop });
        }
      })

      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};

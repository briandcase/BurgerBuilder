import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import WithErrorHandler from '../../hoc/ErrorBoundary/ErrorBoundary';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    fetch('https://react-my-burger-c7cdf.firebaseio.com/orders.json')
      .then((response) => response.json())
      .then((data) => {
        const fetchedOrders = [];
        for (let prop in data) {
          fetchedOrders.push({ ...data[prop], id: prop });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
      });
  }
  render() {
    return (
      <div>
        <WithErrorHandler>
          {this.state.orders.map((order) => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          ))}
        </WithErrorHandler>
      </div>
    );
  }
}

export default Orders;

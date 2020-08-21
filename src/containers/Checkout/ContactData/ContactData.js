import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import classes from './ContactData.module.scss';
import PostData from '../../../fetch-orders';
import CircularProgress from '@material-ui/core/CircularProgress';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: { street: '', postalCode: '' },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Brian Case',
        address: {
          street: 'Teststreet 1',
          zipCode: '4234',
          country: 'USA',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    };
    PostData(
      'https://react-my-burger-c7cdf.firebaseio.com/orders.json',
      order
    ).then((data) => {
      this.setState({ loading: false });
    });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Your street address"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Your postcal code"
        />
        <Button onClick={this.orderHandler} variant="contained" color="primary">
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) form = <CircularProgress />;
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data:</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;

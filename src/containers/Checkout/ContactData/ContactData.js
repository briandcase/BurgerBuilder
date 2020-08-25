import React, { Component } from 'react';
import PostData from '../../../fetch-orders';
import PropTypes from 'prop-types';
import ContactDataForm from './ContactDataForm';
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
    return (
      <>
        <ContactDataForm />
      </>
    );
  }
}

ContactData.propTypes = {
  ingredients: PropTypes.object,
};

export default ContactData;

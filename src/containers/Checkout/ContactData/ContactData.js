import React, { Component } from 'react';
import PostData from '../../../fetch-orders';
import PropTypes from 'prop-types';
import ContactDataForm from './ContactDataForm';
import { connect } from 'react-redux';

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
      ingredients: this.props.ings,
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
        <ContactDataForm clicked={this.orderHandler} />
      </>
    );
  }
}

ContactData.propTypes = {
  ingredients: PropTypes.object,
  price: PropTypes.number,
  ings: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(ContactData);

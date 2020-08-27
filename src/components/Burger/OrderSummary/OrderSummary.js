import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import classes from './OrderSummary.module.scss';

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <>
        <h3>Your Order </h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout ?</p>
        <div className={classes.Container}>
          <Button
            color="secondary"
            onClick={this.props.purchaseCancelled}
            variant="contained"
          >
            CANCEL
          </Button>
          <div className={classes.Divider} />
          <Button
            color="primary"
            onClick={this.props.purchaseContinued}
            variant="contained"
          >
            CONTINUE
          </Button>
        </div>
      </>
    );
  }
}

export default OrderSummary;

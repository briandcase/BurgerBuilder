import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '@material-ui/core/Button';
import classes from './OrderSummary.module.scss';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order </h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout ?</p>
      <div className={classes.Container}>
        <Button
          color="secondary"
          onClick={props.purchaseCancelled}
          variant="contained"
        >
          CANCEL
        </Button>
        <div className={classes.Divider} />
        <Button
          color="primary"
          onClick={props.purchaseContinued}
          variant="contained"
        >
          CONTINUE
        </Button>
      </div>
    </Aux>
  );
};

export default orderSummary;

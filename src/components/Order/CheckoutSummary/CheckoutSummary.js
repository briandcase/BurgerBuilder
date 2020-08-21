import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '@material-ui/core/Button';
import classes from './CheckoutSummary.module.scss';
import classesDivider from '../../Burger/OrderSummary/OrderSummary.module.scss';
const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes delicious!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button
        onClick={props.checkoutContinued}
        variant="contained"
        color="primary"
      >
        CONTINUE
      </Button>
      <div className={classesDivider.Divider} />
      <Button
        onClick={props.checkoutCancelled}
        variant="contained"
        color="secondary"
      >
        CANCEL
      </Button>
    </div>
  );
};

export default checkoutSummary;

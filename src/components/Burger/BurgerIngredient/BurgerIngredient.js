import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.scss';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case 'bread-top':
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case 'meat':
        ingredient = <div classes={classes.Meat}></div>;
        break;
      case 'cheese':
        ingredient = <div classes={classes.Cheese}></div>;
        break;
      case 'bacon':
        ingredient = <div classes={classes.Bacon}></div>;
        break;
      case 'salad':
        ingredient = <div classes={classes.Salad}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;

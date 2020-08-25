import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NavigationItem from './NavigationItem/NavigationItem';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HistoryIcon from '@material-ui/icons/History';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const navigationItems = () => (
  <ul>
    <NavigationItem link="/" active>
      <ListItemIcon>
        <FastfoodIcon />
      </ListItemIcon>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/checkout">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      Checkout
    </NavigationItem>
    <NavigationItem link="/orders">
      {' '}
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      Orders
    </NavigationItem>
  </ul>
);

export default navigationItems;

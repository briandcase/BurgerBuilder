import React from 'react';
import Aux from '../../hoc/Aux';
import AppBar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Aux>
    <AppBar />
    <main>{props.children}</main>
  </Aux>
);

export default layout;

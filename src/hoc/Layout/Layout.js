import React from 'react';
import Aux from '../Aux/Aux';
import AppBar from '../../components/Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Aux>
    <AppBar />
    <main>{props.children}</main>
  </Aux>
);

export default layout;

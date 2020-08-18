import React from 'react';
import ButtonAppBar from '../Navigation/Toolbar/Toolbar';

import Aux from '../../hoc/Aux';

const layout = (props) => (
  <Aux>
    <ButtonAppBar />
    <main>{props.children}</main>
  </Aux>
);

export default layout;

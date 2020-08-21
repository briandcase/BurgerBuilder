import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
          </Layout>
        </Box>
      </Container>
    );
  }
}

export default App;

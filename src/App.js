import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Layout>
            <BurgerBuilder />
          </Layout>
        </Box>
      </Container>
    );
  }
}

export default App;

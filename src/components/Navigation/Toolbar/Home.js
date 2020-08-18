import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
});

const FlatButtons = (props) => {
  return <div></div>;
};

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlatButtons);

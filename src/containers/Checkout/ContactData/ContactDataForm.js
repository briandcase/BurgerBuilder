import React from 'react';
import { Form } from 'react-final-form';
import { TextField, showErrorOnBlur } from 'mui-rff';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '50ch',
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

class ContactDataForm extends React.Component {
  render() {
    return <MyForm initialValues={{ name: 'Name' }} />;
  }
}

function MyForm(props) {
  const { initialValues } = props;

  // yes, this can even be async!
  async function onSubmit(values) {
    console.log(values);
  }

  // yes, this can even be async!
  async function validate(values) {
    if (!values.hello) {
      return { name: 'User name is required' };
    }
    return;
  }
  const classes = useStyles();

  const [delivery, setDelivery] = React.useState('');

  const handleDeliveryChange = (event) => {
    setDelivery(event.target.value);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
      render={({ handleSubmit, values }) => (
        <form className={classes.root} onSubmit={handleSubmit} noValidate>
          <TextField
            id="standard-required"
            label="Name"
            name="userName"
            required={true}
          />
          <TextField
            id="standard-required"
            label="Email"
            name="email"
            showError={showErrorOnBlur}
            required={true}
          />
          <TextField
            id="standard-required"
            label="Address"
            name="address"
            required={true}
          />

          <InputLabel id="demo-simple-select-label">Delivery</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={delivery}
            onChange={handleDeliveryChange}
          >
            <MenuItem value={10}>Fastest</MenuItem>
            <MenuItem value={20}>Cheapest</MenuItem>
          </Select>

          <Button
            clicked={props.orderHandler}
            variant="contained"
            color="primary"
          >
            Submit Order
          </Button>
        </form>
      )}
    />
  );
}

MyForm.propTypes = {
  initialValues: PropTypes.object,
  orderHandler: PropTypes.func,
};

export default ContactDataForm;

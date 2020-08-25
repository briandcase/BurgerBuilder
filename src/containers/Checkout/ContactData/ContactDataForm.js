import React from 'react';
import { Form } from 'react-final-form';
import { TextField, showErrorOnBlur } from 'mui-rff';
import { makeStyles } from '@material-ui/core/styles';
interface FormData {
  name: string;
  email: string;
  address: string;
  postalcode: string;
}

interface MyFormProps {
  initialValues: FormData;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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

function MyForm(props: MyFormProps) {
  const { initialValues } = props;

  // yes, this can even be async!
  async function onSubmit(values: FormData) {
    console.log(values);
  }

  // yes, this can even be async!
  async function validate(values: FormData) {
    if (!values.hello) {
      return { name: 'User name is required' };
    }
    return;
  }
  const classes = useStyles();

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
          <TextField
            id="standard-number"
            label="PostalCode"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            name="postalCode"
            required={true}
          />
        </form>
      )}
    />
  );
}

export default ContactDataForm;

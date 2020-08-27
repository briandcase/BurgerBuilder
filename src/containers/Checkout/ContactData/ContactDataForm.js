import React from 'react';
import { Form } from 'react-final-form';
import { TextField, showErrorOnBlur } from 'mui-rff';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
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
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Age</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'age-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
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

export default ContactDataForm;

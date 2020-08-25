import React from 'react';
import Styles from './Styles';
import { Form, Field } from 'react-final-form';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Select from 'react-select';
import states from './states';

const TextFieldAdapter = ({ input, meta, ...rest }) => (
  <TextField
    {...input}
    {...rest}
    onChange={(event, value) => input.onChange(value)}
    errorText={meta.touched ? meta.error : ''}
  />
);

const ReactSelectAdapter = ({ input, ...rest }) => (
  <Select {...input} {...rest} searchable />
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const required = (value) => (value ? undefined : 'Required');

class ContactDataForm extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Styles>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <Field
                    name="firstName"
                    component={TextFieldAdapter}
                    validate={required}
                    hintText="First Name"
                    floatingLabelText="First Name"
                  />
                </div>
                <div>
                  <Field
                    name="state"
                    component={ReactSelectAdapter}
                    options={states}
                  />
                </div>

                <div className="buttons">
                  <button type="submit" disabled={submitting}>
                    Log In
                  </button>
                  <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </button>
                </div>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
            )}
          />
        </Styles>
      </MuiThemeProvider>
    );
  }
}

export default ContactDataForm;

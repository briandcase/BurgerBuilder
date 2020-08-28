import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ContactDataForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Contact Form
        </Typography>
        <Grid container spacing={4}>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  type="text"
                  placeholder="Name"
                  name="Name"
                  ref={register({ required: true, maxLength: 25 })}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  type="undefined"
                  placeholder="Address"
                  name="Address"
                  ref={register}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  name="email"
                  placeholder="email"
                  ref={register({
                    required: 'Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'invalid email address',
                    },
                  })}
                />
              </Grid>

              {errors.email && errors.email.message}

              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">
                  Delivery Type
                </InputLabel>
                <Select name="Delivery" ref={register} autoWidth>
                  <option value="Fastest">Fastest</option>
                  <option value=" Cheapest"> Cheapest</option>
                </Select>
              </Grid>
            </Grid>
            {errors.username && errors.username.message}

            <Button
              fullWidth
              className={classes.submit}
              variant="contained"
              color="secondary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Grid>
      </div>
    </Container>
  );
};

export default ContactDataForm;

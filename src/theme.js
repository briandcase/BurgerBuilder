import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0057e7',
    },
    secondary: {
      main: '#008744',
    },
    error: {
      main: '#d62d20',
    },
    background: {
      default: '#F5F5F5',
    },
  },
});

export default theme;

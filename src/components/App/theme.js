import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FF542E', dark: '#db4123' },
    secondary: { main: '#C2D3FF' },
    error: { main: '#bb0000' },
    grey: { main: '#404656', secondary: '#9c9ea3', light: '#E2E2E2' },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  MuiButton: {
    fontFamily: 'Montserrat',
  },
});

export default theme;

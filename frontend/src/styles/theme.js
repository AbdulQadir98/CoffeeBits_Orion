import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#3B185F',
      main: '#2A0944',
      dark: '#A12568',
      contrastText: '#fff',
    },
    secondary: {
      light: '#7E7E7E',
      main: '#FEC260',
      dark: '#D9D9D9',
      contrastText: '#000',
    },
  },
});

export default theme;
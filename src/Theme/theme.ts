import { createTheme } from '@material-ui/core';

export default createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  palette: {
    text: {
      primary: '#021D31',
      secondary: '#1E2836',
    },
    primary: {
      main: '#86C232',
      dark: '#61892F',
    },
    secondary: {
      main: '#36558F',
      dark: '#1E2836',
    },
  },
  overrides: {
    // Typography
    MuiTypography: {
      h1: {
        marginBottom: '0.35em',
      },
      body1: {
        marginBottom: '1em',
      },
    },
    // Button
    MuiButton: {
      outlined: {
        padding: '0.3125rem 1.5rem',
        fontSize: '.875rem',
        textTransform: 'initial',
      },
    },
  },
});

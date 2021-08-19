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
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
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
      main: '#3286C2',
      dark: '#36558F',
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "'Poppins', sans-serif",
      },
      gutterBottom: {
        marginBottom: '.5rem',
      },
    },
    // Button
    MuiButton: {
      outlined: {
        padding: '0.5rem 1.5rem',
        fontSize: '.875rem',
        textTransform: 'initial',
      },
      contained: {
        padding: '0.5rem 1.5rem',
        fontSize: '.875rem',
        textTransform: 'initial',
        whiteSpace: 'nowrap',
      },
      containedPrimary: {
        color: 'white',
      },
    },
    // Input
    MuiInputBase: {
      root: {
        marginBottom: 0,
      },
    },
    MuiTextField: {
      root: {
        marginBottom: '1.25rem',
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '11.5px 14px',
        fontSize: '.875rem',
      },
    },
    MuiInputLabel: {
      outlined: {
        fontSize: '.875rem',
        transform: 'translate(14px, 13px) scale(1)',
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: '0.875rem',
      },
    },
    MuiLink: {
      root: {
        color: '#FF725E',
      },
    },
  },
});

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
  palette: {
    primary: {main: lightBlue[50]},
    secondary: lightBlue,
  },
  typography: {
    fontSize: 15,
  },
  overrides: {
    MuiInput: {
      input: {
        width: '100%',
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A400,
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: lightBlue.A400,
      },
    },
    MuiPickersDay: {
      selected: {
        backgroundColor: lightBlue.A400,
      },
      current: {color: lightBlue.A400},
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: lightBlue.A400,
      },
      thumb: {
        backgroundColor: lightBlue.A400,
        border: `14px solid ${lightBlue.A400}`,
      },
      noPoint: {
        backgroundColor: lightBlue.A400,
      },
    },
    MuiTypography: {
      colorPrimary: {color: lightBlue.A400},
    },
    MuiFormControl: {
      root: {
        display: 'inline',
      },
    },
  },
});

export default theme;

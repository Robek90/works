import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
      borderRadius: '10px',
      background: '#F7F7F8',
      border: 0,
      maxWidth: '348px',
      width: '100%',
    },
  },
  input: {
    position: 'relative',
    maxWidth: '309px',
    width: '100%',
    boxSizing: 'border-box',
    height: '50px',
    backgroundColor: '#F7F7F8',
    border: 0,
    borderRadius: '10px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '30px',
    color: '#030229',
    padding: '10px',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
}))(InputBase);

export { BootstrapInput };

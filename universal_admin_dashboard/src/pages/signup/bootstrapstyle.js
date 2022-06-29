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
    maxWidth: '348px',
    width: '100%',
    boxSizing: 'border-box',
    height: '50px',
    backgroundColor: '#F7F7F8',
    border: 0,
    borderRadius: '10px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 19,
    color: '#030229',
    opacity: 0.7,
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

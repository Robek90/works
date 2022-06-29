import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  analytics: {
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
  },
  container: {
    boxSizing: 'border-box',
    verticalAlign: 'top',
    margin: '30px 10px 30px',
    flexGrow: 1,
  },
  tittle: {
    height: '42px',
    float: 'left',
    paddingTop: '6px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '33px',
    color: '#030229',
  },
  buttonContainer: {
    zIndex: '3',
    float: 'right',
    marginRight: '30px',
  },
  button: {
    padding: '10px 20px 10px 20px',
    borderRadius: '10px',
    background: '#605BFF',
    textTransform: 'none',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '22px',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
}));

export default useStyles;

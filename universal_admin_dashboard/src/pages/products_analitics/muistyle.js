import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  products: {
    boxSizing: 'border-box',
    height: '100%',
    padding: '2%',
  },
  container: {},
  header: {
    display: 'flex',
    flexDirection: 'column',
  },
  topHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  tittle: {
    height: '42px',
    paddingTop: '6px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '33px',
    color: '#030229',
  },
  dateSort: {},
  formControl: {
    boxSizing: 'border-box',
    margin: '0 10px 0',
    width: '137px',
  },
  selectEmpty: {
    background: '#FFFFFF',
    borderRadius: '10px',
    padding: '5px 0px 5px 18px',
    textAlign: 'middle',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '19px',
    color: '#030229',
    '&::before': {
      display: 'none',
    },
    '&::after': {
      display: 'none',
    },
  },
  buttonContainer: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftButtonBlock: {},
  rightButtonBlock: {},
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
  body: {
    marginTop: '30px',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: 'repeat(5, 12vh)',
    gridGap: '30px',
  },
}));

export default useStyles;

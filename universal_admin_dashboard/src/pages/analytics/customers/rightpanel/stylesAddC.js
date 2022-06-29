import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  addCustomers: {
    width: '400px',
    height: '100vh',
    background: '#FFFFFF',
    borderRadius: '10px',
  },
  container: {
    height: '100%',
    padding: '5%',
    boxSizing: 'border-box',
  },
  formControl: {
    maxWidth: '348px',
    width: '100%',
  },
  header: {
    height: '40px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '40px',
    color: '#030229',
  },
  textLogo: {
    float: 'left',
    verticalAlign: 'middle',
  },
  cross: {
    float: 'right',
    verticalAlign: 'middle',
    cursor: 'pointer',
  },
  addAva: {
    margin: '0 auto',
    marginTop: '10%',
    marginBottom: '10%',
    width: '134px',
    height: '134px',
  },
  inputsContainer: {
    margintTop: '10%',
  },
  label: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '19px',
    color: '#030229',
  },
  input: {
    marginBottom: '5%',
  },
  buttonCreate: {
    backgroundColor: '#605BFF',
    borderRadius: '10px',
    padding: '4% 33% 4%',
    marginTop: '10%',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
}));

export default useStyles;

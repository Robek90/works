import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  darkpanel: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#030229',
    opacity: 0.3,
    zIndex: 3,
  },
  addCustomers: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
    width: '369px',
    height: '100vh',
    background: '#FFFFFF',
  },
  container: {
    height: '100%',
    paddingTop: '25%',
    padding: '5%',
    boxSizing: 'border-box',
  },
  formControl: {
    maxWidth: '309px',
    width: '100%',
  },
  formControlPrice: {
    maxWidth: '145px',
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
  backbtn: {
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'pointer',
  },
  textLogo: {
    marginLeft: '19%',
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '25px',
    color: '#030229',
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
  inputPrice: {
    marginBottom: '10%',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  checkbox: {
    marginBottom: '3%',
    marginLeft: '10%',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '19px',
    color: '#030229',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  chekboxlabel: {
    margin: 0,
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  chekboxtext: {
    margin: 0,
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  textArea: {
    boxSizing: 'border-box',
    backgroundColor: '#F7F7F8',
    borderBottom: 0,
    borderRadius: '10px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '30px',
    color: '#030229',
    padding: '10px',
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
  hide: {
    display: 'none',
  },
}));

export default useStyles;

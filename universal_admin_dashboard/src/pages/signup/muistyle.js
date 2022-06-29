import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paperLeft: {
    gridColumn: 'span 2',
    textAlign: 'center',
    height: '100%',
  },
  paperRight: {
    background: '#FAFAFA',
    textAlign: 'center',
    height: '100%',
  },
  button: {
    margin: theme.spacing(1),
    textTransform: 'none',
    background: '#F7F7F8',
    borderRadius: '10px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineheight: '22px',
    color: '#030229',
    width: '158px',
  },
  margin: {
    margin: '10px 0 10px 0',
    maxWidth: '348px',
    width: '100%',
  },
  label: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineheight: '22px',
    color: '#030229',
  },
  checkBoxContainer: {
    postition: 'relative',
    maxWidth: '348px',
    width: '100%',
    margin: '0 auto',
    marginTop: '15px',
  },
  checkBoxLabel: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineheight: '22px',
    color: '#030229',
  },
  checkBox: {
    bottom: '12px',
  },
  buttonCreate: {
    margin: '0 auto',
    borderRadius: '10px',
    marginTop: '30px',
    marginBottom: '30px',
    maxWidth: '348px',
    width: '100%',
    height: '50px',
    background: '#605BFF',
  },
  loginReady: {
    textDecoration: 'none',
    paddingBottom: '90px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineheight: '22px',
  },
}));

export default useStyles;

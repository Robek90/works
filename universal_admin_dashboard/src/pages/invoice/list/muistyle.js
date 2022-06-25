import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  listContainer: {
    boxSizing: 'border-box',
    marginTop: '30px',
    maxHeight: '90vh',
    boxShadow: 'none',
    background: '#F7F7F8',
    padding: '0 20px 0',
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
  table: {
    minWidth: '700px',
    borderCollapse: 'separate',
    borderSpacing: '0px 10px',
    paddingBottom: '50px',
  },
  headerTable: {
    border: 0,
    background: '#F7F7F8',
    color: '#030229',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
  },
  bodyTable: {
    borderTop: '5px #FAFAFB',
    borderBottom: '5px #FAFAFB',
  },
  bodyTableLeft: {
    borderRadius: '10px 0 0 10px',
  },
  bodyTableRight: {
    borderRadius: '0 10px 10px 0',
  },
  row: {
    '&:hover': {
      background: '#FFFFFF',
      boxShadow: '1px 17px 44px rgba(3, 2, 41, 0.07)',
    },
    '&:selected': {
      background: '#FFFFFF',
      boxShadow: '1px 17px 44px rgba(3, 2, 41, 0.07)',
    },
  },
  male: {
    textAlign: 'center',
    width: '30px',
    height: '14px',
    padding: '5px 18px 10px',
    borderRadius: '33px',
    background: '#5b93ff40',

    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '19px',

    color: '#5B93FF',
  },
  female: {
    textAlign: 'center',
    width: '46px',
    height: '19px',
    padding: '4px 15px 8px',
    borderRadius: '33px',
    background: '#ff8f6b30',
    color: '#FF8F6B',
  },
  tBody: {
    overflowX: 'auto',
    cursor: 'pointer',
  },
  avatar: {
    width: '30px',
    height: '30px',
    verticalAlign: 'middle',
    marginRight: '11px',
  },
  colTitle: {
    marginRight: '10px',
  },
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
});

export default useStyles;

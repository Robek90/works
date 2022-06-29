import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  userpage: {
    marginTop: '106px',
    border: '1px solid #000000',
  },
  head: {
    width: '100%',
    marginBottom: '25px',
    display: 'grid',
    gridTemplateRows:'1fr 1fr',
  },
  tophead: {
    margin: '0 62px 0 53px',
    borderLeft: '1px solid #000000',
    borderRight: '1px solid #000000',
  },
  topname: {
    margin: 0,
    marginLeft: '18px',
    fontFamily: 'Alegreya Sans SC',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '35px',
    lineHeight: '64px',
    color: '#000000',
  },
  bottomhead: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    boxSizing: 'border-box',
    padding: '0 62px 0 53px',
    borderTop: '1px solid #000000',
    borderBottom: '1px solid #000000',
  },
  userInfo: {
    boxSizing: 'border-box',
    margin: 0,
    display: 'inline-block',
    padding: '18px',
    borderLeft: '1px solid #000000',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '17px',
    color: '#000000',
    '&:last-child': {
      borderRight: '1px solid #000000',
    },
  },
  companybs: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '14px',
    color: '#000000',
  },
  groupBtn: {
    width: '25%',
    boxSizing: 'border-box',
    display: 'inline-block',
    borderLeft: '1px solid #000000',
    borderRight: '1px solid #000000',
  },
}));

export default useStyles;

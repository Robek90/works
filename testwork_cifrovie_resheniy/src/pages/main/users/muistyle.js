import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  errorBlock: { 
    margin: '0 auto',
    padding: '0px 15px 6px',
    width:' 400px',
    border: '1px solid #000000',
  },
  errorTextTitle: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '30px',
    lineHeight: '40px',
    textAlign: 'center',
    color: '#000000',
  },
  errorText: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '20px',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.41)',
  },
  loader: {
    margin: '0 auto',
    padding: '0px 15px 6px',
    width:' 200px',
  },
  loaderText: {
    margin: 0,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '30px',
    lineHeight: '40px',
    textAlign: 'center',
    color: '#000000',
  },
  userCard: {
    width: '239px !important',
    height: '143px',
    display: 'inline-block',
    border: '1px solid #DADADA',
  }
}));

export default useStyles;

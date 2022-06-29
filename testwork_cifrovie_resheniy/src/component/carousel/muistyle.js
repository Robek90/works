import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  usersList: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap:' 2vw',
  },
  userCard: {
    boxSizing: 'border-box',
    padding: '14px 5%',
    width: '100% !important',
    minWidth: '239px',
    height: '143px',
    border: '1px solid #000000',
  },
  userName: {
    margin: 0,
    marginBottom: '4px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '23px',
    textTransform: 'capitalize',
    color: '#000000',
  },
  userCity: {
    margin: 0,
    marginBottom: '35px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '17px',
    color: 'rgba(0, 0, 0, 0.41)',
  },
  userBtnProfile: {
    padding: '10px 20px',
    cursor: 'pointer',
    background: '#101010',
    margin: '0 auto',
    textDecoration: 'none',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '11px',
    lineHeight: '15px',
    color: '#FFFFFF',
  },
}));

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  orderContainer: {
    padding: '3%',
    gridColumn: 'span 3',
    background: '#FFFFFF',
  },
  orderHeader: {
    height: '25px',
    marginBottom: '30px',
  },
  orderTitle: {
    float: 'left',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '25px',
    color: '#000000',
    opacity: '0.7',
  },
  orderSeeMore: {
    float: 'right',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '25px',
    color: '#605BFF',
    cursor: 'pointer',
  },
  orderTable: {
    boxShadow: 'none',
    borderRadius: '10px',
    boxSizing: 'border-box',
    height: '85%',
  },
  table: {
    width: '100%',
  },
  headerTable: {
    zIndex: 2,
    border: 0,
    background: '#FFFFFF',
    color: '#030229',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
  },
  colTitle: {
    marginRight: '10px',
  },
  bodyTable: {
    borderTop: '5px #FAFAFB',
    borderBottom: '5px #FAFAFB',
  },
  tBody: {
    overflowX: 'auto',
    cursor: 'pointer',
  },
  bodyTableLeft: {
    borderRadius: '2px 0 0 2px',
  },
  bodyTableRight: {
    borderRadius: '0 2px 2px 0',
  },
  nameLink: {
    textDecoration: 'none',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '16px',

    color: '#0068DD',
  },
});

export default useStyles;

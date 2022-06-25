import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  dotsMenu: {
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  placeMenu: {
    top: '0px !important',
    left: '40px !important',
    zIndex: 1,
  },
  MuiListItem: {
    Button: {
      '&:hover': {
        opacity: 0.1,
      },
    },
  },
  iconImg: {
    marginRight: '7px',
    width: '10px',
    height: '10px',
  },
  textEdit: {
    margin: '2px 10px 2.5px 10px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '10px !important',
    lineHeight: '14px !important',
    background: '#5b93ff1a',
    borderRadius: '5px',
    color: '#5B93FF',
  },
  textDelte: {
    margin: '2.5px 10px 2px 10px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '10px !important',
    lineHeight: '14px !important',
    background: '#e71d3617',
    borderRadius: '5px',
    color: '#E71D36',
  },
});

export default useStyles;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    position: 'absolute',
    top: 0,
    height: '70px',
    width: '100%',
    background: '#101010',
  },
  title: {
    width: '175px',
    margin: 0,
    marginLeft: '61px',
    float: 'left',
    fontFamily: 'Alegreya Sans SC',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '70px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  headerBtns: {
    padding: '15px 0',
    verticalAlign: 'middle',
    float: 'right',
  },
  blind: {
    marginRight: '12px',
    border: 'none',
    padding: '11.5px 40.5px',
    cursor: 'pointer',
    background: '#FFFFFF',
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000',
  },
  profile: {
    marginRight: '61px',
    border: 'none',
    padding: '11.5px 57px',
    cursor: 'pointer',
    background: '#FFFFFF',
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000',
  }
}));

export default useStyles;

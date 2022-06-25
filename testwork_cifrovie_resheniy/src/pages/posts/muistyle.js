import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  postHead: {
    
  },
  postTitle: {
    width: '10%',
    margin: 0,
    marginBottom: '15px',
    float: 'left',
    fontFamily: 'Alegreya Sans SC',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '35px',
    lineHeight: '40px',
    color: '#000000',
  },
  showAll: {
    margin: 0,
    cursor: 'pointer',
    float: 'right',
    fontFamily: 'Alegreya Sans SC',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '30px',
    border: '1px solid #000000',
    background: '#FFFFFF',
    color: '#000000',
  },
  content: {
    width: '100%',
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap:' 2vw',
  },
  contentHide: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap:' 2vw',
  },
  cardPost: {
    cursor: 'pointer',
    padding: '14px 35px 17px 35px',
    border: '1px solid #000000',
    textDecoration: 'none',
  },
  cardPostHide: {
    display: 'none',
  },
  cardTitle: {
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
  cardText: {
    margin: 0,
    display: '-webkit-box',
    lineClamp: 1,
    boxOrient: 'vertical', 
    overflow: 'hidden',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '17px',
    color: 'rgba(0, 0, 0, 0.41)',
  },
  userPosts: {
    padding: '16px 61px 80px 50px',
  },
  bottomContainer: {
    position: 'relative',
    padding: '100px 53px 41px 62px',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 70,
      left: -200,
      width: '114.5%',
      height: '1px',
      background: '#000000',
    },
  },
  bottomContainerTitle: {
    fontFamily: 'Alegreya Sans SC',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '35px',
    lineHeight: '40px',
    color: '#000000',
  },
  bottomContent: {
    display: 'grid',
    gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr 1fr',
    gridGap: '2vh',
  },
  square: {
    width: '100%',
    height: '154px',
    border: '1px solid #000000',
    '&:nth-child(1)': {
      background: '#63B4EE',
    },
    '&:nth-child(2)': {
      background: '#2B9FF2',
    },
    '&:nth-child(3)': {
      background: '#547FED',
    },
    '&:nth-child(4)': {
      background: '#4366E1',
    },
    '&:nth-child(5)': {
      background: '#2040B0',
    },
    '&:nth-child(6)': {
      background: '#0C257C',
    },
  }
}));

export default useStyles;

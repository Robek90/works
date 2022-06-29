import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    display: 'inline-block',
    width: '218px',
    boxSizing: 'border-box',
    paddingTop: '50px',
    background: 'white',
  },
  sidebarOpen: {
    width: '218px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  sidebarClose: {
    paddingTop: '35px',
    margin: '30px 0 30px 30px',
    borderRadius: '10px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: '73px',
  },
  buttonLogo: {
    width: '20px',
    height: '20px',
    marginRight: '17px',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  topLogo: {
    paddingBottom: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topLogoOpen: {
    paddingBottom: '30px',
    flexDirection: 'row',
  },
  topLogoClose: {
    paddingBottom: '30px',
    flexDirection: 'column',
  },
  link: {
    boxSizing: 'border-box',
    width: 218,
    paddingLeft: 30,
    textDecoration: 'none',
    padding: 0,
    margin: 0,
    color: '#030229',
    display: 'inline-block',
    verticalAlign: 'middle',
    '&:hover': {
      opacity: 1,
      fill: '#605BFF',
      color: '#0062cc',
      boxShadow: 'none',
    },
  },
  linkClose: {
    color: '#FFFFFF !important',
  },
  textLinkActive: {
    height: '100%',
    boxSizing: 'border-box',
    width: 218,
    paddingLeft: 30,
    textDecoration: 'none',
    padding: 0,
    margin: 0,
    color: '#0062cc',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  menuList: {
    minHeight: 'calc(100vh - 380px)',
  },
  menuListOpen: {
    minHeight: 'calc(100vh - 320px)',
    transition: theme.transitions.create('minHeight', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  logOut: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logOutOpen: {
    flexDirection: 'row',
    padding: '0 5px',
  },
  logOutClose: {
    flexDirection: 'column',
    padding: '0 5px',
  },
  textLogOut: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '28px',
  },
  toolbar: {
    marginBottom: '15px',
  },
  hide: {
    textIndent: '-9999px',
  },
}));

export default useStyles;

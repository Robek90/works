import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';

const menuData = {
  wh30k: [
    { icon: <PermMedia />, label: <Link to="/wh30k">Все книги 30K</Link> },
    { icon: <People />, label: <Link to="/wh30k/imperium">Империум</Link> },
    { icon: <Dns />, label: <Link to="/wh30k/chaos">Хаос</Link> },
    { icon: <People />, label: <Link to="/wh30k/orks">Орки</Link> },
    { icon: <Dns />, label: <Link to="/wh30k/tau">Тау</Link> },
    { icon: <PermMedia />, label: <Link to="/wh30k/eldar">Эльдары</Link> },
    { icon: <Public />, label: <Link to="/wh30k/darkeldar">Темные Эльдары</Link> },
  ],
  wh40k: [
    { icon: <PermMedia />, label: <Link to="/wh40k">Все книги 40K</Link> },
    { icon: <People />, label: <Link to="/wh40k/imperium">Империум</Link> },
    { icon: <Dns />, label: <Link to="/wh40k/chaos">Хаос</Link> },
    { icon: <PermMedia />, label: <Link to="/wh40k/orks">Орки</Link> },
    { icon: <Dns />, label: <Link to="/wh40k/tau">Тау</Link> },
    { icon: <PermMedia />, label: <Link to="/wh40k/eldar">Эльдары</Link> },
    { icon: <Public />, label: <Link to="/wh40k/darkeldar">Темные Эльдары</Link> },
  ]
};

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function MenuList(props) {
  const { tittle, items } = props;

  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <Box
              sx={{
                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary={tittle}
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                  secondary="Dark Fantasy Universe"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
              </ListItemButton>
              {open && menuData[items] && 
                menuData[items].map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))
                
              }
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
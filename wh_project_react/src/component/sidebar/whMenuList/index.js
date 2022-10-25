import React, { useState } from 'react';
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
  const menuData = {
    wh30k: [
      { key:1, icon: <PermMedia />, label: 'Все книги 30K', path: "?category=wh30k", tag: ['wh30k']},
      { key:2, icon: <People />, label: 'Империум', path: "?category=wh30k&race=imperium", tag: ['wh30k', 'imperium']},
      { key:3, icon: <Dns />, label: 'Хаос', path: "?category=wh30k&race=chaos", tag: ['wh30k', 'chaos']},
      { key:4, icon: <People />, label: 'Орки', path: "?category=wh30k&race=orks", tag: ['wh30k', 'orks']},
      { key:5, icon: <Dns />, label: 'Тау', path: "?category=wh30k&race=tau", tag: ['wh30k', 'tau']},
      { key:6, icon: <PermMedia />, label: 'Эльдары', path: "?category=wh30k&race=eldar", tag: ['wh30k', 'eldar']},
      { key:7, icon: <Public />, label: 'Темные Эльдары', path: "?category=wh30k&race=darkeldar", tag: ['wh30k', 'darkeldar']},
    ],
    wh40k: [
      { key:8, icon: <PermMedia />, label: 'Все книги 40K', path: "/wh40k", tag: ['wh40k']},
      { key:9, icon: <People />, label: 'Империум', path: "/wh40k/imperium", tag: ['wh40k', 'imperium']},
      { key:10, icon: <Dns />, label: 'Хаос', path: "/wh40k/chaos", tag: ['wh40k', 'chaos']},
      { key:11, icon: <PermMedia />, label: 'Орки', path: "/wh40k/orks", tag: ['wh40k', 'orks']},
      { key:12, icon: <Dns />, label: 'Тау', path: "/wh40k/tau", tag: ['wh40k', 'tau']},
      { key:13, icon: <PermMedia />, label: 'Эльдары', path: "/wh40k/eldar", tag: ['wh40k', 'eldar']},
      { key:14, icon: <Public />, label: 'Темные Эльдары', path: "/wh40k/darkeldar", tag: ['wh40k', 'darkeldar']},
    ]
  };

  const { tittle, items, utils } = props;

  const setMenu = props.menufilter.setMenu;

  const [open, setOpen] = useState(false);

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
                  <Link 
                    to={`/books${item.path}&page=1`} 
                    onClick={() => {
                      utils.menuFilterBooks(item.tag, setMenu);
                      props.history.push(`/books${item.path}&page=1`);
                    }}
                  >
                    <ListItemButton
                      key={item.key}
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
                  </Link>
                ))
              }
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
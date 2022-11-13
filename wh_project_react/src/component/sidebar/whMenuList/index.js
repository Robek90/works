import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

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
      { key:8, icon: <PermMedia />, label: 'Все книги 40K', path: "?category=wh40k", tag: ['wh40k']},
      { key:9, icon: <People />, label: 'Империум', path: "?category=wh40k&race=imperium", tag: ['wh40k', 'imperium']},
      { key:10, icon: <Dns />, label: 'Хаос', path: "?category=wh40k&race=chaos", tag: ['wh40k', 'chaos']},
      { key:11, icon: <PermMedia />, label: 'Орки', path: "?category=wh40k&race=orks", tag: ['wh40k', 'orks']},
      { key:12, icon: <Dns />, label: 'Тау', path: "?category=wh40k&race=tau", tag: ['wh40k', 'tau']},
      { key:13, icon: <PermMedia />, label: 'Эльдары', path: "?category=wh40k&race=eldar", tag: ['wh40k', 'eldar']},
      { key:14, icon: <Public />, label: 'Темные Эльдары', path: "?category=wh40k&race=darkeldar", tag: ['wh40k', 'darkeldar']},
    ]
  };

  const [value, setValue] = useState('1');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Warhammer 30k" value="1" />
            <Tab label="Warhammer 40k" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {menuData.wh30k.map((item) => (
              <Link 
                to={`/books${item.path}&page=1`} 
                onClick={() => {
                  props.history.push(`/books${item.path}&page=1`);
                }}
              >
                <ul>
                  <li>
                  {item.icon}
                  {item.label}
                  </li>
                </ul>
              </Link> 
            ))
          }
        </TabPanel>
        <TabPanel value="2">
          {menuData.wh40k.map((item) => (
              <Link 
                to={`/books${item.path}&page=1`} 
                onClick={() => {
                  props.history.push(`/books${item.path}&page=1`);
                }}
              >
                <ul>
                  <li>
                  {item.icon}
                  {item.label}
                  </li>
                </ul>
              </Link> 
            ))
          }
        </TabPanel>
      </TabContext>
    </Box>
  );
}
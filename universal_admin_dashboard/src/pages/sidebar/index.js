import React from 'react';
import clsx from 'clsx';
import MenuItem from '@material-ui/core/MenuItem';
import { MenuList } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/icon/Logo.svg';
import Dashboard from '../../assets/icon/Dashboard.svg';
import Analytics from '../../assets/icon/Analytics.svg';
import Invoice from '../../assets/icon/Invoice.svg';
import Schedule from '../../assets/icon/Schedule.svg';
import Settings from '../../assets/icon/Settings.svg';
import LogOut from '../../assets/icon/LogOut.svg';
import ProfilePhoto from '../../assets/image/ProfilePhoto.png';
import { inject, observer } from 'mobx-react';

import useStyles from './muistyle';
import './style.css';

export default inject('menu')(
  observer((props) => {
    const classes = useStyles();

    const open = props.menu.value;

    const linkArr = [
      {
        link: '/dashboard/',
        text: 'Dashboard',
        img: Dashboard,
      },
      {
        link: '/analytics/',
        text: 'Analytics',
        img: Analytics,
      },
      {
        link: '/invoice/',
        text: 'Invoice',
        img: Invoice,
      },
      {
        link: '/products/',
        text: 'Products',
        img: Schedule,
      },
    ];

    return (
      <div
        id="sidebar"
        className={clsx(classes.sidebar, {
          [classes.sidebarOpen]: open,
          [classes.sidebarClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.sidebarOpen]: open,
            [classes.sidebarClose]: !open,
          }),
        }}
      >
        <div
          className={clsx(classes.topLogo, {
            [classes.topLogoOpen]: open,
            [classes.topLogoClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.topLogoOpen]: open,
              [classes.topLogoClose]: !open,
            }),
          }}
        >
          <img className="logo" src={Logo} alt="" />
          <p className="textLogo">Base</p>
        </div>
        <MenuList
          id="menu-list-grow"
          className={clsx(classes.menuList, {
            [classes.menuListOpen]: open,
            [classes.menuListClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.menuListOpen]: open,
              [classes.menuListClose]: !open,
            }),
          }}
        >
          {linkArr.map((row) => (
            <MenuItem key={row.link} disableGutters={true}>
              <NavLink
                activeClassName={classes.textLinkActive}
                className={clsx(classes.link, {
                  [classes.linkClose]: !open,
                })}
                to={row.link}
              >
                <img className={classes.buttonLogo} src={row.img} alt="" />
                <span
                  className={clsx(classes.text, {
                    [classes.hide]: !open,
                  })}
                >
                  {row.text}
                </span>
              </NavLink>
            </MenuItem>
          ))}
        </MenuList>
        <div className={classes.toolbar} onClick={() => props.menu.handleTrigger()}>
          <MenuItem disableGutters={true}>
            <div
              className={clsx(classes.link, {
                [classes.linkClose]: !open,
              })}
            >
              <img className={classes.buttonLogo} src={Settings} alt="" />
              Menu Collapse
              <p
                className={clsx(classes.textlink, {
                  [classes.hide]: !open,
                })}
              ></p>
            </div>
          </MenuItem>
        </div>
        <div
          className={clsx(classes.logOut, {
            [classes.logOutOpen]: open,
            [classes.logOutClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.logOutOpen]: open,
              [classes.logOutClose]: !open,
            }),
          }}
        >
          <img className="profileAva" src={ProfilePhoto} alt="Avatar" />
          <div
            className={clsx(classes.textLogOut, {
              [classes.hide]: !open,
            })}
          >
            <p className={classes.text}>Easin Arafat</p>
            <p className="text2">Free Account</p>
          </div>
          <NavLink to="/">
            <img className="logOutImg" src={LogOut} alt="Log Out" />
          </NavLink>
        </div>
      </div>
    );
  })
);

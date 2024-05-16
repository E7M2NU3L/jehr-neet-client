"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AppRegistrationRounded, Dashboard, LoginSharp, LogoutRounded, Menu, Search } from '@mui/icons-material';

import {Person3, Newspaper, BookOnline} from '@mui/icons-material'

const navLinksMobile = [
    {
        id : 1 ,
        text : 'Courses',
        Icon: <Search style={{ color: '#7353ba' }} />
    }, {
        id: 2,
        text: 'Webinars',
        Icon: <BookOnline style={{ color: '#7353ba' }} />
    }, {
        id: 3,
        text: 'About',
        Icon: <Person3 style={{ color: '#7353ba' }} />
    }, {
        id: 4,
        text: 'blogs',
        Icon: <Newspaper style={{ color: '#7353ba' }} />
    }
]

const UserLinkLoggedout = [{
    id : 1 ,
    text : 'Login',
    Icon: <LoginSharp style={{ color: '#7353ba' }} />
}, {
    id: 2,
    text: 'Sign up',
    Icon: <AppRegistrationRounded style={{ color: '#7353ba' }} />
}]

const UserLinkLoggedIn = [
    {
        id : 1 ,
        text : 'Dashboard',
        Icon: <Dashboard style={{ color: '#7353ba' }} />
    }, {
        id: 2,
        text: 'Logout',
        Icon: <LogoutRounded style={{ color: '#7353ba' }} />
    }
]

export default function DrawerRight() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, height: "100%", background: "#020708", color: "#7353ba" }} role="presentation" onClick={toggleDrawer(false)}>
        <List className=''>
            <React.Fragment>
                {navLinksMobile.map((content) => (
                <ListItem key={content.id} disablePadding>
                    <ListItemButton key={content.id}>
                    <ListItemIcon>
                        {content.Icon}
                    </ListItemIcon>
                    <ListItemText primary={content.text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </React.Fragment>
        </List>

        <Divider />
        <List className=''>
            <React.Fragment>
                {UserLinkLoggedout.map((content) => (
                <ListItem key={content.id} disablePadding>
                    <ListItemButton key={content.id}>
                    <ListItemIcon>
                        {content.Icon}
                    </ListItemIcon>
                    <ListItemText primary={content.text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </React.Fragment>
        </List>


        <List className=''>
            <React.Fragment>
            {UserLinkLoggedIn.map((content) => (
                <ListItem key={content.id} disablePadding>
                <ListItemButton key={content.id}>
                    <ListItemIcon>
                    {content.Icon}
                    </ListItemIcon>
                    <ListItemText primary={content.text} />
                </ListItemButton>
                </ListItem>
            ))}
            </React.Fragment>
        </List>

    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className='text-dark-amaranth_purple-600'>
        <Menu className='text-dark-amaranth_purple-600' sx={{
            color: "#a30b37"
        }} />
      </Button>
      <Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

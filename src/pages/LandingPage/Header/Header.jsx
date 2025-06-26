import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} className="header">
      {/* <Toolbar className="toolbar">
        <Box className="logo">as youplan</Box>
        <Box className="nav-links">
          <Button color="inherit" className="nav-link">Home</Button>
          <Button color="inherit" className="nav-link">Services</Button>
          <Button color="inherit" className="nav-link">Contact</Button>
        </Box>
        <Box className="header-actions">
          <Button color="inherit" className="action-btn">INR</Button>
          <Button color="inherit" className="action-btn">English</Button>
          <Button color="inherit" className="action-btn">Become An Expert</Button>
          <Button color="inherit" className="action-btn">Sign In / Register</Button>
        </Box>
      </Toolbar> */}
    </AppBar>
  );
};

export default Header;
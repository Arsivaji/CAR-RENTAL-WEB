import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, } from '@mui/material';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/search" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Search</Button>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Register</Button>
        </Link>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

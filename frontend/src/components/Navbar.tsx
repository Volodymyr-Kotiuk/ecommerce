import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-commerce
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Головна
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          Кошик
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Авторизація
        </Button>
        <Button color="inherit" component={Link} to="/register">
          Реєстрація
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

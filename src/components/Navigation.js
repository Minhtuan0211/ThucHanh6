// src/components/Navigation.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navigation({ cartCount }) {
  return (
    <AppBar position="static" sx={{ background: '#5e3e27', boxShadow: 'none' }}>
      <Toolbar>
        <Box sx={{ flex: 1 }} />
        
        <Typography
          variant="h6"
          component={RouterLink}
          to="/listproduct"
          sx={{
            flex: 1,
            textAlign: 'center',
            textDecoration: 'none',
            color: '#fff',
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Balloon Store
        </Typography>
        
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            component={RouterLink}
            to="/cart"
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              fontFamily: "'Roboto', sans-serif",
              '&:hover': { borderColor: '#fff' },
            }}
            startIcon={<ShoppingCartIcon sx={{ color: '#fff' }} />}
          >
            Giỏ hàng ({cartCount})
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;

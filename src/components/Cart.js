// src/components/Cart.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function Cart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '0 20px' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: '#5e3e27', mb: 4, textAlign: 'center' }}
      >
        Giỏ hàng
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Giỏ hàng trống
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell>Hình ảnh</TableCell>
                <TableCell>Sản phẩm</TableCell>
                <TableCell>Giá</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      style={{ width: '80px', borderRadius: '8px' }}
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price.toLocaleString()} ₫</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => removeFromCart(index)}
                    >
                      Xóa
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button
          variant="contained"
          component={RouterLink}
          to="/listproduct"
          sx={{
            backgroundColor: '#5e3e27',
            '&:hover': { backgroundColor: '#4d321f' },
          }}
        >
          Tiếp tục mua hàng
        </Button>
      </div>
    </div>
  );
}

export default Cart;

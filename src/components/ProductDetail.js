// src/components/ProductDetail.js
import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { productsData } from '../data/productsData';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Typography variant="h6" sx={{ m: 4 }}>
        Sản phẩm không tồn tại!
      </Typography>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '20px auto', padding: '0 20px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {}
          <Swiper
            modules={[SwiperNavigation]}
            navigation
            spaceBetween={10}
            slidesPerView={1}
          >
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  style={{ width: '100%', borderRadius: '8px' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ color: '#5e3e27' }}>
            {product.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ color: '#5e3e27', mb: 2 }}>
            Giá: {product.price.toLocaleString()} ₫
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#5e3e27',
              '&:hover': { backgroundColor: '#4d321f' },
              mr: 2,
            }}
            onClick={() => addToCart(product)}
          >
            Thêm vào giỏ hàng
          </Button>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/listproduct"
            sx={{
              color: '#5e3e27',
              borderColor: '#5e3e27',
              '&:hover': { borderColor: '#5e3e27' },
            }}
          >
            Quay lại danh sách
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductDetail;

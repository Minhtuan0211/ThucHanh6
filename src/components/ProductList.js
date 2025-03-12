// src/components/ProductList.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { productsData } from '../data/productsData';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
} from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function ProductList({ addToCart }) {
  return (
    <div className="container my-5">
      <Typography variant="h4" gutterBottom sx={{ color: '#5e3e27', mb: 4 }}>
        Danh sách sản phẩm
      </Typography>

      {}
      <Swiper
        className="swiper-productlist"
        modules={[SwiperNavigation, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {productsData.map((product) => (
          <SwiperSlide key={product.id}>
            <Card
              sx={{
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0',
                margin: '0 auto',
                maxWidth: '300px',
              }}
            >
              
              <CardMedia
                component="img"
                height="250"
                image={product.images[0]}
                alt={product.name}
                sx={{
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Giá: {product.price.toLocaleString()} ₫
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button
                  size="small"
                  component={RouterLink}
                  to={`/product/${product.id}`}
                  sx={{ color: '#5e3e27' }}
                >
                  Xem chi tiết
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => addToCart(product)}
                  sx={{
                    backgroundColor: '#5e3e27',
                    '&:hover': { backgroundColor: '#4d321f' },
                  }}
                >
                  Thêm vào giỏ
                </Button>
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {}
      <div style={{ marginTop: '40px' }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#5e3e27', mb: 4 ,textAlign: 'center'}}>
          ---- Chi tiết các sản phẩm ----
          
        </Typography>
        <Grid container spacing={3}>
          {productsData.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  border: '1px solid #e0e0e0',
                  margin: '0 auto',
                  height: '100%',
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={product.images[0]}
                  alt={product.name}
                  sx={{
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Giá: {product.price.toLocaleString()} ₫
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                  <Button
                    size="small"
                    component={RouterLink}
                    to={`/product/${product.id}`}
                    sx={{ color: '#5e3e27' }}
                  >
                    Xem chi tiết
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => addToCart(product)}
                    sx={{
                      backgroundColor: '#5e3e27',
                      '&:hover': { backgroundColor: '#4d321f' },
                    }}
                  >
                    Thêm vào giỏ
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default ProductList;

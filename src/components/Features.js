import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const features = [
  {
    image: 'path/to/higher-profits.png',
    title: 'Higher Profits',
    description: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.',
  },
  {
    image: 'path/to/robust-scaling.png',
    title: 'Robust Scaling',
    description: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.',
  },
  {
    image: 'path/to/best-selection.png',
    title: 'Best Selection',
    description: 'With 900+ products and top quality brands, you can choose the best products for your business.',
  },
];

const Features = () => {
  return (
    <Box sx={{ padding: '2rem',marginBottom:'6rem',marginTop:'6rem', textAlign: 'justify' }}>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={feature.image} alt={feature.title} style={{ width: '100px', height: '100px' }} />
              <Typography variant="h6" component="h2" sx={{ marginTop: '1rem', fontWeight: 'bold',marginLeft:'-9.5rem',textAlign:'justify' }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" component="p" sx={{ marginTop: '0.5rem', maxWidth: '300px' }}>
                {feature.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;

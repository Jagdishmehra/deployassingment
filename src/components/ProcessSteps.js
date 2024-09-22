import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const steps = [
  {
    image: 'https://via.placeholder.com/100/00FF00/FFFFFF?text=Create', // Demo image
    title: 'CREATE',
    subtitle: 'custom products',
    description: 'Easily add your designs to a wide range of products using our free tools',
  },
  {
    image: 'https://via.placeholder.com/100/00FF00/FFFFFF?text=Sell', // Demo image
    title: 'SELL',
    subtitle: 'on your terms',
    description: 'You choose the products, sale price, and where to sell',
  },
  {
    image: 'https://via.placeholder.com/100/00FF00/FFFFFF?text=Fulfillment', // Demo image
    title: 'WE HANDLE',
    subtitle: 'fulfillment',
    description: 'Once an order is placed, we automatically handle all the printing and delivery logistics',
  },
];

const ProcessSteps = () => {
  return (
    <Box sx={{textAlign:'justify', padding: '2rem', textAlign: 'center' }}>
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={step.image} alt={step.title} style={{ width: '100px', height: '100px' }} />
              <Typography variant="h6" component="h2" sx={{ marginTop: '1rem',  fontWeight: 'bold', color: 'green' }}>
                {step.title}
              </Typography>
              <Typography variant="h6" component="h3" sx={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
                {step.subtitle}
              </Typography>
              <Typography variant="body1" component="p" sx={{textAlign:'justify', marginTop: '0.5rem', maxWidth: '300px' }}>
                {step.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProcessSteps;

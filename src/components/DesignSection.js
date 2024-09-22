import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DesignSection = () => {
  return (
    <Box sx={{ marginBottom: '6rem', marginTop: '6rem', padding: '2rem', textAlign: 'center' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: 'green',
              borderRadius: '8px',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
             <img
              src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" // Placeholder GIF
              alt="Design Products"
              style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold',textAlign:'justify',marginLeft:'4rem' }} gutterBottom>
            Easily add your design to a <br /> wide range of products
          </Typography>
          <Typography variant="body1" component="p" sx={{textAlign:'justify',marginLeft:'4rem'}}  gutterBottom>
            With our free design tools, you can easily add your <br /> custom designs to t-shirts, mugs, phone cases, and <br /> hundreds of other <br /> products.
          </Typography>
          <Button
            variant="text"
            sx={{ color: 'green', marginTop: '1rem', marginLeft:'3.5rem',  display: 'flex', alignItems: 'center' }}
            endIcon={<ArrowForwardIcon />}
          >
            All products
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DesignSection;

import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const MainSection = () => {
  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" sx={{marginTop:'8rem', fontSize:'45px', fontWeight:'bold', display:'flex', justifyContent:'center'}} gutterBottom>
            Create and sell <br /> custom products
          </Typography>
          <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6" component="p" gutterBottom sx={{ display: 'flex', alignItems: 'center',marginRight:'6rem' }}>
              <CheckIcon sx={{ color: 'green', marginRight: '0.5rem' }} />
              100% Free to use
            </Typography>
            <Typography variant="h6" component="p" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckIcon sx={{ color: 'green', marginRight: '0.5rem' }} />
              900+ High-Quality Products
            </Typography>
            <Typography variant="h6" component="p" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckIcon sx={{ color: 'green', marginRight: '0.5rem' }} />
              Largest global print network
            </Typography>
          </Box>
          <Box sx={{ marginTop: '2rem' }}>
            <Button variant="contained" sx={{ backgroundColor: 'green', marginRight: '1rem', '&:hover': { backgroundColor: 'darkgreen' } }}>
              Start for free
            </Button>
            <Button variant="outlined" sx={{ color: 'green', borderColor: 'green', '&:hover': { borderColor: 'darkgreen', color: 'darkgreen' } }}>
              How it works?
            </Button>
            <Typography variant="h6" component="p" gutterBottom sx={{ color: 'green', display: 'flex', marginLeft: '12rem' ,fontSize:'15px', marginTop:'.5rem'}}>
              Trusted by over 8M sellers around the world
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Custom T-Shirt GIF" style={{ width: '100%', maxWidth: '400px' }} /> {/* Placeholder GIF */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainSection;

import React from 'react';
import { Box, Grid, Typography, Button, Card, CardContent } from '@mui/material';

const MakeMoney = () => {
  return (
    <Box sx={{ marginTop:'6rem',marginBottom:'6rem', padding: '2rem',width:'80%',marginX:'auto', backgroundColor: '#1a2e35', borderRadius: '8px', color: 'white' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            Make Money, Risk-Free
          </Typography>
          <Typography variant="body1" component="p" sx={{ marginBottom: '2rem' }}>
            You pay for fulfillment only when you make a sale
          </Typography>
          <Card sx={{ backgroundColor: '#2a3b45', color: 'white', marginBottom: '2rem' }}>
            <CardContent>
              <Typography variant="body1" component="p" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                You sell a t-shirt <span>$30</span>
              </Typography>
              <Typography variant="body1" component="p" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                You pay for its production <span>$12</span>
              </Typography>
              <Box sx={{ borderBottom: '1px solid #4a5a65', margin: '1rem 0' }}></Box>
              <Typography variant="body1" component="p" sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', color: 'green' }}>
                Your profit <span>$18</span>
              </Typography>
            </CardContent>
          </Card>
          <Button variant="contained" sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'darkgreen' } }}>
            Start selling
          </Button>
          <Typography variant="body2" component="p" sx={{ marginTop: '1rem' }}>
            100% Free to use · 900+ Products · Largest print network
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src="https://via.placeholder.com/400x300" alt="Illustration" style={{ width: '100%', maxWidth: '400px' }} /> {/* Demo image */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MakeMoney;

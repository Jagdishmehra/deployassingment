import React from 'react';
import { Box, Typography } from '@mui/material';

const ConnectStore = () => {
  return (
    <Box sx={{marginBottom:'6rem',marginTop:'6rem', padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }} gutterBottom>
        Connect your store
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Printify easily integrates with major e-commerce platforms and marketplaces
      </Typography>
      <Box sx={{ position: 'relative', marginTop: '2rem' }}>
        <Box
          sx={{
            backgroundColor: 'green',
            borderRadius: '8px',
            padding: '2rem',
            display: 'inline-block',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <img
            src="https://via.placeholder.com/100/00FF00/FFFFFF?text=Printify"
            alt="Printify"
            style={{ width: '100px', height: '100px' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ConnectStore;

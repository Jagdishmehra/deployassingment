import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const CustomSolutions = () => {
  return (
    <Box
      sx={{
        marginBottom:'6rem',marginTop:'6rem',
        display: 'flex',
        width:'80%',
        marginX:'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4rem 4rem',
        background: 'linear-gradient(90deg, #E6F4EA 50%, #A3E4B5 75%, #34C759 100%)',
        borderRadius: '8px',
        
      }}
    >
      <Typography variant="h6" component="p" sx={{ color: '#004d40', fontWeight: 'bold' }}>
        Are you a large business looking for custom solutions?
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'white',
          color: '#004d40',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
      >
        Talk to sales
      </Button>
    </Box>
  );
};

export default CustomSolutions;

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const TrustedBy = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              marginLeft: { xs: 0, md: '12rem' },
              lineHeight: 1.2,
            }}
          >
            Trusted by over 8M <br/>sellers around the <br/> world
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            component="p"
            sx={{
              marginLeft: { xs: 0, md: '2rem' },
              lineHeight: 1.5,
            }}
          >
            Whether you are just getting started or run <br/> an enterprise-level e-commerce business, we do<br/> everything we can to ensure a positive merchant<br/> experience.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrustedBy;

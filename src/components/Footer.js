import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';

const socialMedia = [
  { icon: <FacebookIcon />, link: 'https://www.facebook.com' },
  { icon: <InstagramIcon />, link: 'https://www.instagram.com' },
  { icon: <LinkedInIcon />, link: 'https://www.linkedin.com' },
  { icon: <TwitterIcon />, link: 'https://www.twitter.com' },
  { icon: <YouTubeIcon />, link: 'https://www.youtube.com' },
  { icon: <RedditIcon />, link: 'https://www.reddit.com' },
];

const links = {
  Integrations: [
    'Shopify',
    'Etsy',
    'eBay',
    'Amazon',
    'PrestaShop',
    'BigCommerce',
    'Wix',
    'WooCommerce',
    'Squarespace',
    'Printify API',
    'Printify Pop-Up Store',
    'Shutterstock',
  ],
  Discover: [
    'Blog',
    'Guides',
    'Products',
    'Etsy print-on-demand',
    'Shopify print-on-demand',
    'Woocommerce print-on-demand',
    'Wix print-on-demand',
    'Squarespace print-on-demand',
    'Make Your Own Shirt',
    'Brands',
    'Pricing',
    'Shipping Rates',
  ],
  'Start selling': [
    'Custom T-shirts',
    'Custom Hoodies',
    'Custom Mugs',
    'Custom Socks',
    'Custom Backpacks',
    'Custom Branding',
    'Sell on Etsy',
    'Sell on Social Media',
    'Free T-shirt Designs',
    'Custom Products',
    'Custom All-Over-Print Hoodies',
    'Start a Clothing Line',
    'Start POD Business',
  ],
  Printify: [
    'Print on Demand',
    'Print Providers',
    'Experts Program',
    'Printify Express Delivery',
    'Become a Partner',
    'About',
    'Printify Quality Promise',
    'Jobs',
    'Webinars',
    'Printing Profits Podcast',
    'Contact Us',
    'Affiliate',
    'Contact Sales',
    'POD Glossary',
  ],
};

const Footer = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <img src="https://via.placeholder.com/150x50" alt="Printify Logo" style={{ width: '150px' }} /> {/* Demo image */}
            <Box>
              {socialMedia.map((social, index) => (
                <IconButton key={index} href={social.link} target="_blank" rel="noopener noreferrer" sx={{ color: 'green' }}>
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {Object.keys(links).map((category, index) => (
              <Box key={index} sx={{ flex: 1, marginRight: index < Object.keys(links).length - 1 ? '2rem' : 0 }}>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                  {category}
                </Typography>
                {links[category].map((link, linkIndex) => (
                  <Typography key={linkIndex} variant="body2" component="p" sx={{ marginBottom: '0.5rem' }}>
                    <Link href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                      {link}
                    </Link>
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', borderTop: '1px solid #e0e0e0', paddingTop: '1rem' }}>
            <Link href="#" sx={{ marginRight: '1rem', color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Intellectual Property Policy
            </Link>
            <Link href="#" sx={{ marginRight: '1rem', color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Terms of Service
            </Link>
            <Link href="#" sx={{ marginRight: '1rem', color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Privacy Policy
            </Link>
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Security
            </Link>
          </Box>
          <Typography variant="body2" component="p" sx={{ textAlign: 'center', marginTop: '1rem' }}>
            © 2024 Printify, Inc. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

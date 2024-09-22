import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Rating } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Robert A. Voltaire',
    role: 'Store link',
    image: 'path/to/robert-image.png',
    rating: 5,
    text: 'Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!',
  },
  {
    name: 'Quinten Barney',
    role: 'Etsy Merchant',
    image: 'path/to/quinten-image.png',
    rating: 5,
    text: 'We chose Printify because of their offerings as well as their incredibly low prices. After several years, we\'ve come to find that their customer service is also top notch, and their platform just keeps getting better and better.',
  },
  {
    name: 'Nikki',
    role: 'Store link',
    image: 'path/to/nikki-image.png',
    rating: 5,
    text: 'Printify has been amazing as we grow our business, finding products we can make for our customers. Customer Service team makes the whole process a breeze.',
  },
  {
    name: 'John Doe',
    role: 'Online Seller',
    image: 'path/to/john-image.png',
    rating: 4,
    text: 'Printify has streamlined our production process and allowed us to focus more on design and marketing. Highly recommend!',
  },
  {
    name: 'Jane Smith',
    role: 'E-commerce Entrepreneur',
    image: 'path/to/jane-image.png',
    rating: 5,
    text: 'The variety of products and ease of use make Printify an essential tool for our business. The support team is also fantastic!',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{width:'80%',marginX:'auto', padding: '2rem', textAlign: 'center' }}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ padding: '0 1rem' }}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Avatar src={testimonial.image} alt={testimonial.name} sx={{ marginRight: '1rem' }} />
                  <Box>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {testimonial.role}
                    </Typography>
                    <Rating value={testimonial.rating} readOnly />
                  </Box>
                </Box>
                <Typography variant="body2" component="p"sx={{ textAlign:'justify' }}>
                  {testimonial.text}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Testimonials;

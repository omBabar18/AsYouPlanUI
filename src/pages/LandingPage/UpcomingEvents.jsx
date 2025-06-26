import React from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';

const TravelEvents = () => {
  const travelImages = [
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&fit=crop", // Tropical beach
    "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&fit=crop"  // Mountain resort
  ];

  return (
    <Box sx={{ 
      py: 8,
      px: { xs: 2, md: 4 },
      maxWidth: 1400,
      margin: '0 auto'
    }}>
      {/* Section Heading */}
      <Typography 
        variant="h3" 
        component="h2" 
        sx={{ 
          textAlign: 'center',
          mb: 6,
          fontWeight: 700,
          color: 'text.primary',
          fontSize: { xs: '1.8rem', md: '2.2rem' }
        }}
      >
        Upcoming Events
      </Typography>

      {/* Image Cards - Fixed Equal Size */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {travelImages.map((image, index) => (
          <Grid item xs={12} sm={10} md={5} key={index} sx={{ display: 'flex' }}>
            <Card sx={{ 
              width: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <CardMedia
                component="img"
                image={image}
                alt={`Travel destination ${index + 1}`}
                sx={{ 
                  width: '100%',
                  height: 400, // Fixed height for all cards
                  flexGrow: 1,
                  objectFit: 'cover'
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TravelEvents;
import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';

const TravelEvents = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const travelCards = [
    {
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&fit=crop",
      text: "What to do on your trip"
    },
    {
      image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&fit=crop",
      text: "Up to 70% off"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  return (
    <Box sx={{ 
      py: 8,
      px: { xs: 2, md: 4 },
      maxWidth: 1400,
      marginTop: '40px',
      marginBottom: '10px'
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

      {/* Image Cards */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {travelCards.map((card, index) => (
          <Grid 
            key={index} 
            sx={{ 
              display: 'flex',
              minWidth: { xs: '100%', sm: 'calc(50% - 32px)', md: 'calc(50% - 32px)' },
              maxWidth: { xs: '100%', sm: 'calc(50% - 32px)', md: 'calc(50% - 32px)' },
              flex: '1 1 0%'
            }}
          >
            <Card 
              sx={{ 
                width: '100%',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer' // Changes cursor to pointer on hover
                }
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={scrollToTop} // Added click handler
            >
              <CardMedia
                component="img"
                image={card.image}
                alt={`Travel destination ${index + 1}`}
                sx={{ 
                  width: '100%',
                  height: 400,
                  flexGrow: 1,
                  objectFit: 'cover'
                }}
              />
              {/* Text overlay appears on hover for both cards */}
              {card.text && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    p: 2,
                    textAlign: 'center',
                    opacity: hoveredCard === index ? 1 : 0,
                    transform: hoveredCard === index ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease'
                  }}
                >
                  <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                    {card.text}
                  </Typography>
                </Box>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TravelEvents;